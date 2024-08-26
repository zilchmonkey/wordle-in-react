import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./css/index.css"
import { ConstantsProvider } from "./contexts/ConstantContext"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConstantsProvider>
      <App />
    </ConstantsProvider>
  </React.StrictMode>
)
