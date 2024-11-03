import { QueryClientProvider } from '@tanstack/react-query'
import CreateProvider from './contexts/createContext'
import { queryClient } from './lib/react-query'
import { Routes } from "./Routes"

function App(): JSX.Element {

  return (
    <CreateProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </CreateProvider>
  )
}

export default App
