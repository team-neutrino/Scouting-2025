import requests
import json
import time
import pandas as pd
from pathlib import Path

# Define the base URL and API key
BASE_URL = "https://www.thebluealliance.com/api/v3"
API_KEY = "evMtKpcBGlJiRvCpiFxYHWUAFgIsw2Ti2QXBsODyqqplwoiIgswJlhIld7Eg0ZFd"

# Define headers for the API request
HEADERS = {
    "X-TBA-Auth-Key": API_KEY,
    "Accept": "application/json"
}

def get_event_teams(event_key):
    """
    Fetch all teams participating in a specific event
    """
    url = f"{BASE_URL}/event/{event_key}/teams"
    try:
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching teams for event {event_key}: {e}")
        return None

def get_event_teams_statuses(event_key):
    """
    Fetch team statuses for a specific event
    """
    url = f"{BASE_URL}/event/{event_key}/teams/statuses"
    try:
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching team statuses for event {event_key}: {e}")
        return None

def main():
    event_key = "2026mnwi"
    
    print(f"Fetching all teams for event {event_key}...")
    
    # Get all teams at the event
    teams = get_event_teams(event_key)
    
    if teams:
        print(f"\nFound {len(teams)} teams at event {event_key}:\n")
        
        # Create a list to store team data for CSV
        teams_data = []
        
        # Display team information
        for team in teams:
            team_number = team['team_number']
            team_name = team.get('nickname', 'N/A')
            team_key = team.get('key', 'N/A')
            city = team.get('city', 'N/A')
            state = team.get('state_prov', 'N/A')
            country = team.get('country', 'N/A')
            location = f"{city}, {state} {country}".strip()
            
            print(f"Team {team_number}: {team_name}")
            print(f"  Key: {team_key}")
            print(f"  Location: {location}")
            print()
            
            # Add to teams_data list for CSV
            teams_data.append({
                'team_key': team_key,
                'team_number': team_number,
                'team_name': team_name,
                'location': location
            })
        
        # Create directory if it doesn't exist
        output_dir = Path(__file__).parent.parent / 'data' / '2026'
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Save teams to a JSON file
        output_file = output_dir / f'{event_key}_teams.json'
        with open(output_file, 'w') as f:
            json.dump(teams, f, indent=2)
        print(f"\nTeam data saved to {output_file}")
        
        # Save teams to CSV file
        df = pd.DataFrame(teams_data)
        csv_file = output_dir / f'{event_key}_teams.csv'
        df.to_csv(csv_file, index=False)
        print(f"Team CSV saved to {csv_file}")
        
        # Get team statuses
        print(f"\nFetching team statuses for event {event_key}...")
        team_statuses = get_event_teams_statuses(event_key)
        
        if team_statuses:
            print(f"\nTeam Statuses:")
            for team_key, status_info in team_statuses.items():
                print(f"  {team_key}: {status_info}")
            
            # Save team statuses to a JSON file
            status_file = output_dir / f'{event_key}_team_statuses.json'
            with open(status_file, 'w') as f:
                json.dump(team_statuses, f, indent=2)
            print(f"\nTeam status data saved to {status_file}")
    else:
        print(f"No teams found for event {event_key}")

if __name__ == "__main__":
    main()


