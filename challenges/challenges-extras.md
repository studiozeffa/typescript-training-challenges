# Extra Challenges

If you run out of challenges, here are some additional ones to work through.

## Word Occurrence

Given a phrase, count the number of occurrences of particular words, and return this in an appropriate data structure.

For example, given a phrase: `stupid is as stupid does`, the response should include:

```
stupid: 2
is: 1
as: 1
does: 1
```

## Scrabble

Given a series of letters, and each letter position (regular/double/triple), calculate the scrabble score. Here are the rules to scrabble:

- Each letter scores according to the table below.
- If any letter is placed on a triple score square, the whole score is tripled.
- Else, if any letter is placed on a double score square, the whole score is doubled.
- You can play up to 7 letters at a time. Playing all 7 letters results in a 50 point bonus to the overall total.

Letter scoring:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

## Register

Write an app which allows children to be added to a class register in a particular year of a primary school. The app should:

- Provide a way of adding a child's name to a year (1-6)
- Return a list of children in a particular year, sorted in alphabetical order
- Return a complete list of the whole school, ordered by year (lowest first)

## Play Your Cards Right

Write a game which implements a simplified version of Bruce's Play Your Cards Right. The game works as follows:
- There are 52 cards in a deck, these are four lots of 2, 3, 4, 5, 6, 7, 8, 9, Jack, Queen, King and Ace.
- The game selects ten cards at random from the deck.
- The game presents the first card to the user.
- The user tries to guess whether the next card will be higher or lower than the previous card.
- The game presents the next card.
  - If the user guessed correctly, and there are cards remaining, they have another turn at guessing higher or lower for the next card.
  - If the user guessed incorrectly, or there are no cards remaining, the game ends.
- When the game ends, present the user with their score, which is the number of correct guesses.

Hints:

- Decouple the logic that waits for user intervention from the game, so that the game can be automated (and hence tested).
- To unit test this, place the 'random card' picker into a function that can be mocked during testing.
- Ensure you assert that no single card can be picked twice during the game.