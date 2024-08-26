import { JSX } from "react"

interface GuessLineProps {
  guess: string
  solution: string
  isFinal: boolean
}

const GuessInputs = ({
  guess,
  solution,
  isFinal,
}: GuessLineProps): JSX.Element => {
  return (
    <div className="flex gap-2.5 m-auto">
      {guess.split("").map((char, i) => {
        let className =
          "flex w-10 h-10 border border-black justify-center items-center capitalize text-3xl"

        if (isFinal) {
          if (char == solution[i]) {
            className += " bg-green-400"
          } else if (solution.includes(char)) {
            className += " bg-yellow-400"
          } else {
            className += " bg-stone-400"
          }
        }

        return (
          <div key={i} className={className}>
            {char}
          </div>
        )
      })}
    </div>
  )
}

export default GuessInputs
