import { useEffect } from "react";
import { fetchHello, getUsers } from "../services/fetchApi"

export default function Sobre() {

    const fetchApiHello = async () =>{
        try {
            const response = await getUsers();
            console.log("Hello from API: ", response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApiHello();
    }, []);

    return (
        <div>
            <h1>Teste</h1>
        </div>
    )
}