import { createContext, FC, ReactNode } from "react"

export interface Constants {
  NUM_GUESSES: number
  WORD_LENGTH: number
}

const defaultValues: Constants = {
  NUM_GUESSES: 6,
  WORD_LENGTH: 5,
}

export const ConstantContext = createContext(defaultValues)

interface ConstantsProviderProps {
  children: ReactNode
}

export const ConstantsProvider: FC<ConstantsProviderProps> = ({ children }) => (
  <ConstantContext.Provider value={defaultValues}>
    {children}
  </ConstantContext.Provider>
)
