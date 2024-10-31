export function Create() {

    async function handleAddCustomer() {
        const doc = {
            name: "Rodrigo Silva de Sena",
            email: "teste@teste.com",
            phone: "994030985",
            address: "Rua X, centro",
            role: "Frontend",
            status: true
        }

        const response = await window.api.addCustomer(doc);
        console.log(response);
    }

    return (
        <div>
            <h1>Novo Cliente</h1>

            <button onClick={handleAddCustomer}>CADASTRAR</button>
        </div>
    )
}