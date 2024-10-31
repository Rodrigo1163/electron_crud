import { useContext } from "react"
import { CreateContext } from '../contexts/createContext'
import { Link } from "react-router-dom"

export function Home() {
    const { name } = useContext(CreateContext)

    async function handleAdd() {
        const response = await window.api.fetchAllCustomers();
        console.log(response)
    }
    return (
        <div>
            <h1>Página home</h1>

            <button onClick={handleAdd}>
                Ver Usuarios
            </button>
        </div>
    )
}