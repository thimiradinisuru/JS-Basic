def start_game():
    global total_runs, wickets, balls, overs, striker, non_striker
    total_runs = 0
    wickets = 0
    balls = 0
    overs = 0
    striker = input("Enter the name of the striker: ")
    non_striker = input("Enter the name of the non-striker: ")

def switch_batsmen():
    global striker, non_striker
    striker, non_striker = non_striker, striker

def play_ball():
    global total_runs, wickets, balls, overs, striker, non_striker
    runs = input(f"{striker} is facing the ball. Enter runs scored in ball {balls + 1}: ")
    if runs.isdigit():
        runs = int(runs)
        if runs in [0, 1, 2, 3, 4, 6]:
            total_runs += runs
            balls += 1
            if runs in [1, 3]:
                switch_batsmen()
            if balls == 6:
                switch_batsmen()
                print(f"End of over {overs + 1}. Total: {total_runs}/{wickets}. {striker}: {striker_score()} | {non_striker}: {non_striker_score()}")
                balls = 0
                overs += 1
        elif runs == 5:
            print("No such scoring option. Please enter again.")
        else:
            print("Invalid input. Please enter runs between 0 and 6.")
    elif runs.lower() == "w":
        wickets += 1
        balls += 1
        if wickets == 4:
            print("All players out! Game Over")
            return
        print(f"Wicket! Total: {total_runs}/{wickets}. {striker} is out.")
        new_batsman_name = input('Enter New Player Name: ')
        if striker == non_striker:
            non_striker = new_batsman_name
        else:
            striker = new_batsman_name
    else:
        print("Invalid input. Please enter a valid run or 'w' for wicket.")
    print(f"Total Runs: {total_runs}")
    print(f"Total Wickets: {wickets}")
    print(f"Total Overs: {overs}")
    print(f"Total Balls: {overs * 6 + balls}")

def striker_score():
    global striker
    return total_runs if striker == "Player A" else 0

def non_striker_score():
    global non_striker
    return total_runs if non_striker == "Player B" else 0

def main():
    start_game()
    print("Let's start the match!")
    while overs < 2 and wickets < 4:
        play_ball()
    print("Match Over")
    if total_runs < 10:
        print("Game Over - Short of Target")
    else:
        print(f"Final Score: {total_runs}/{wickets} in {overs} overs. {striker}: {striker_score()} | {non_striker}: {non_striker_score()}")
    print(f"Total Marks: {total_runs}")
    print(f"Total Wickets: {wickets}")
    print(f"Total Balls: {overs * 6 + balls}")

if __name__ == "__main__":
    main()
