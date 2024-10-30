import CreateProvider from './contexts/createContext'
import { Routes } from "./routes"

function App(): JSX.Element {

  return (
    <CreateProvider>
      <Routes />
    </CreateProvider>
  )
}

export default App
