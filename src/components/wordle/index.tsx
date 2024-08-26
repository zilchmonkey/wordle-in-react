import { useEffect, useReducer, useState, JSX, useContext } from "react"
import data from "../../../data/words.json"
import GuessInputs from "./GuessInputs"
import { ConstantContext } from "../../contexts/ConstantContext"
import guessesReducer from "../../reducers/guessesReducer"

const Wordle = (): JSX.Element | null => {
  const { NUM_GUESSES, WORD_LENGTH } = useContext(ConstantContext)
  const [{ guesses, currentGuess }, dispatch] = useReducer(
    guessesReducer(NUM_GUESSES, WORD_LENGTH),
    {
      guesses: Array(NUM_GUESSES).fill(null),
      currentGuess: "",
    }
  )
  const [solution, setSolution] = useState<string | null>(null)

  useEffect(() => {
    setSolution(
      data.words[Math.floor(Math.random() * data.words.length)].toLowerCase()
    )
  }, [])

  useEffect(() => {
    if (solution == null) {
      return
    }
    const onKeyPress = (event: KeyboardEvent) => {
      dispatch({ key: event.key, solution })
    }

    window.addEventListener("keydown", onKeyPress)

    return () => {
      window.removeEventListener("keydown", onKeyPress)
    }
  }, [solution])

  const currentGuessIndex = guesses.findIndex((guess) => guess == null)

  if (solution == null) {
    return null
  }

  return (
    <div className="board flex flex-col gap-2.5 p-2.5">
      {guesses.map((guess, i) => {
        return (
          <GuessInputs
            key={i}
            guess={(i === currentGuessIndex
              ? currentGuess
              : guess ?? ""
            ).padEnd(WORD_LENGTH)}
            solution={solution}
            isFinal={currentGuessIndex > i || currentGuessIndex === -1}
          />
        )
      })}
    </div>
  )
}

export default Wordle
