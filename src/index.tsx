import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ModalProvider } from "./component/modal"
import { StoreProvider } from "./component/store"
import { preventZoom } from "./preventZoom"

preventZoom()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ModalProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ModalProvider>
  </React.StrictMode>,
)
