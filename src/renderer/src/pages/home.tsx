import { useContext } from "react"
import { CreateContext } from '../contexts/createContext'
import { Link } from "react-router-dom"

export function Home() {
    const { name } = useContext(CreateContext)
    return (
        <div className="flex flex-col h-screen w-full justify-center items-center text-white">
            <div className="flex flex-col justify-center items-center bg-[#071013] h-96 rounded-[20px]">
                <h1 className='text-4xl font-bold'>Grupo MK</h1>
                <p className="text-white">{name} kkkkkkkkkk</p>
                <p className='text-sm mt-2'>Produção - Montagem automática</p>
                <p className='text-base mt-10 w-10/12'>Olá, para iniciar seu teste forneça o seu número de matricula.</p>
            </div>
            <input type="text" placeholder='Digite aqui seu número de matricula'
                className='w-[400px] pl-2 border-2 h-[40px] mt-4 text-black rounded-[10px]'
            />
            <Link to={"/create"}
                className='bg-[#071013] rounded-[5px] h-[35px] w-[120px] text-center mt-2 ml-[250px] text-sm'
            >Começar teste</Link>
            {/* <button
                className='bg-[#071013] rounded-[5px] h-[35px] w-[120px] text-center mt-2 ml-[250px] text-sm'
            >Começar teste</button> */}
        </div>
    )
}