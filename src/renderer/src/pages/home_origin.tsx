import { Testando } from "../components/teste"

export function Home() {
    return (
        <div className="flex flex-col h-screen w-full justify-center items-center text-white">
            <Testando />
            <div className="flex flex-col justify-center items-center bg-[#071013] h-96 rounded-[20px]">
                <h1 className='text-4xl font-bold'>Grupo MK</h1>
                <p className='text-sm mt-2'>Produção - Montagem automática</p>
                <p className='text-base mt-10 w-10/12'>Olá, para iniciar seu teste forneça o seu número de matricula.</p>
            </div>
            <input type="text" placeholder='Digite aqui seu número de matricula'
                className='w-[400px] pl-2 border-2 h-[40px] mt-4 text-black rounded-[10px]'
            />
            <button
                className='bg-[#071013] rounded-[5px] h-[35px] w-[120px] text-center mt-2 ml-[250px] text-sm'
            >Começar teste</button>
        </div>
    )
}