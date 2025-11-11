import requests
import pandas as pd
import json
from pathlib import Path
import ast

# Statbotics API base URL
STATBOTICS_API_URL = "https://api.statbotics.io/v3"

def flatten_dict(d, parent_key='', sep='_'):
    """
    Recursively flatten a nested dictionary
    """
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_dict(v, new_key, sep=sep).items())
        elif isinstance(v, list):
            # Convert lists to strings for CSV storage
            items.append((new_key, str(v)))
        else:
            items.append((new_key, v))
    return dict(items)

def get_team_epa(team_number, year=2025):
    """
    Fetch EPA data for a specific team in a given year
    """
    url = f"{STATBOTICS_API_URL}/team_year/{team_number}/{year}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching EPA data for team {team_number}: {e}")
        return None

def get_team_epa_history(team_number, year=2025):
    """
    Fetch EPA history data for a specific team in a given year
    """
    url = f"{STATBOTICS_API_URL}/team_year/{team_number}/{year}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching EPA history for team {team_number}: {e}")
        return None

def read_teams_csv(csv_file):
    """
    Read the teams CSV file
    """
    try:
        df = pd.read_csv(csv_file)
        return df
    except FileNotFoundError:
        print(f"Error: File {csv_file} not found")
        return None

def main():
    # Read the teams CSV file
    csv_file = Path(__file__).parent.parent / 'data' / '2026' / '2026mnwi_teams.csv'
    
    print(f"Reading teams from {csv_file}")
    teams_df = read_teams_csv(csv_file)
    
    if teams_df is None:
        return
    
    print(f"\nFound {len(teams_df)} teams")
    
    # Create a list to store EPA data
    epa_data = []
    
    # Fetch EPA data for each team
    for idx, row in teams_df.iterrows():
        team_number = row['team_number']
        team_name = row['team_name']
        
        print(f"\nFetching EPA data for team {team_number} ({team_name})...")
        
        # Get EPA data
        epa_info = get_team_epa(team_number, year=2025)
        
        if epa_info:
            # Flatten the entire epa_info dictionary recursively
            flattened_epa = flatten_dict(epa_info)
            
            # Create the record with team info and flattened EPA data
            epa_record = {
                'team_number': team_number,
                'team_name': team_name,
                'team_key': row['team_key'],
                'location': row['location'],
            }
            
            # Add all flattened EPA fields
            epa_record.update(flattened_epa)
            
            # Get EPA history
            epa_history = get_team_epa_history(team_number, year=2025)
            if epa_history:
                epa_record['events_attended'] = len(epa_history)
            
            epa_data.append(epa_record)
    
    if epa_data:
        # Create a DataFrame from EPA data
        epa_df = pd.DataFrame(epa_data)
        
        # Save to CSV
        output_dir = Path(__file__).parent.parent / 'data' / '2026'
        output_dir.mkdir(parents=True, exist_ok=True)
        
        csv_output = output_dir / '2026mnwi_teams_epa.csv'
        epa_df.to_csv(csv_output, index=False)
        print(f"\n\nEPA data saved to {csv_output}")
        
        # Save to JSON
        json_output = output_dir / '2026mnwi_teams_epa.json'
        with open(json_output, 'w') as f:
            json.dump(epa_data, f, indent=2)
        print(f"EPA data saved to {json_output}")
    else:
        print("No EPA data was successfully retrieved")

if __name__ == "__main__":
    main()
