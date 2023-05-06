import random

def get_case():
    crimes = ["data theft", "identity theft", "AI kidnapping", "cryptocurrency heist", "digital art forgery"]
    suspects = ["John", "Sarah", "Mike", "Lucy", "Alice", "Tom", "Rachel", "Victor", "Eva", "Daniel"]
    crime = random.choice(crimes)
    culprit = random.choice(suspects)
    witnesses = random.sample([s for s in suspects if s != culprit], 3)
    return crime, culprit, witnesses

def main():
    print("Welcome to Cyber Sleuth!")
    print("Your mission is to solve cybercrimes by analyzing clues and interrogating witnesses and suspects.")
    input("Press Enter to start your investigation.")

    crime, culprit, witnesses = get_case()
    print(f"\nA new case has come in: {crime}.")
    print(f"Witnesses: {', '.join(witnesses)}\n")

    attempts = 3
    while attempts > 0:
        guess = input("Who do you think is the culprit? ")
        if guess == culprit:
            print(f"Congratulations! {culprit} is indeed the perpetrator of the {crime}. Case closed!")
            break
        else:
            attempts -= 1
            print(f"{guess} is not the culprit. You have {attempts} attempts left.\n")

    if attempts == 0:
        print(f"You've run out of attempts. The real culprit was {culprit}. Better luck next time!")

    print("Thanks for playing Cyber Sleuth!")

if __name__ == "__main__":
    main()
