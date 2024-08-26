interface State {
  guesses: (string | null)[]
  currentGuess: string
}

interface Action {
  key: string
  solution: string
}

const guessesReducer =
  (NUM_GUESSES: number, WORD_LENGTH: number) =>
  (state: State, { key, solution }: Action): State => {
    const { guesses, currentGuess } = state
    if (guesses[NUM_GUESSES - 1] != null || guesses.includes(solution)) {
      return state
    }

    switch (key) {
      case "Backspace": {
        return { guesses, currentGuess: currentGuess.slice(0, -1) }
      }
      case "Enter": {
        if (currentGuess.length !== WORD_LENGTH) {
          return state
        }
        const currentGuessIndex = guesses.findIndex((guess) => guess == null)
        const guessesClone = [...guesses]
        guessesClone[currentGuessIndex] = currentGuess
        return { guesses: guessesClone, currentGuess: "" }
      }
      default: {
        const charCode = key.toLowerCase().charCodeAt(0)
        const isLetter =
          key.length === 1 &&
          charCode >= "a".charCodeAt(0) &&
          charCode <= "z".charCodeAt(0)

        if (currentGuess.length < WORD_LENGTH && isLetter) {
          return { guesses, currentGuess: currentGuess + key.toLowerCase() }
        }
        return state
      }
    }
  }

export default guessesReducer
