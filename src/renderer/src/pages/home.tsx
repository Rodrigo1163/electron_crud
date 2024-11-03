import { useContext } from "react"
import { CreateContext } from '../contexts/createContext'
import { Link } from "react-router-dom"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export function Home() {
    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery({
        queryKey: ["customers"], queryFn: async () => {
            const response = await window.api.fetchAllCustomers();
            return response;
        }
    });

    // const { name } = useContext(CreateContext)

    // async function handleAdd() {
    //     const response = await window.api.fetchAllCustomers();
    //     console.log(response)
    // }
    // async function handleCustomerById() {
    //     const docId = "5af0dfd8-ec9f-482f-9816-d05631ce2176"
    //     const response = await window.api.fetchCustomerById(docId)
    //     console.log(response)
    // }
    // async function handleDeleteCustomer() {
    //     const docId = "5af0dfd8-ec9f-482f-9816-d05631ce2176";
    //     const response = await window.api.deleteCustomer(docId);
    //     console.log(response)
    // }
    return (
        <div className="flex-1 flex flex-col py-12 text-white">
            <div className="px-10">
                <h1 className="text-white text-xl lg:text-3xl font-semibold mb-4">
                    Todos clientes
                </h1>
            </div>

            <section className="flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]">
                {!isFetching && data?.length === 0 && (
                    <p className="text-gray-300">Nenhum cliente cadastrado</p>
                )}
                {data?.map((customer) => (
                    <Link
                        to={`/customer/${customer._id}`}
                        key={customer._id}
                        className="bg-gray-800 px-4 py-3 rounded"
                    >
                        <p className="mb-2 font-semibold text-lg">{customer.name}</p>
                        <p><span className="font-semibold">Email: </span>{customer.email}</p>
                        {customer.phone && (
                            <p>
                                <span className="font-semibold">Telefone: </span> {customer.phone}
                            </p>
                        )}
                    </Link>
                ))}
            </section>
        </div>
    )
}