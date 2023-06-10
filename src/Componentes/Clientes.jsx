import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";


const Clientes = () => {


        const DATOS = process.env.REACT_APP_DATOS

        const [ apiData, setApiData ] = useState([]);

      /*  useEffect(() =>{
            axios.get(DATOS)
            .then((data) => console.log(data))
        },[]);
    */
        useEffect(() => {
            axios.get(DATOS)
            .then((res) => {console.log(res.data);
            setApiData(res.data)
        })

        }, [])
        






    return (
        <>
    <div className="App">

        <h1>
            Estamos en la pagina de clientes
        </h1>





    </div>
        </>
        
    )
    }
    
    export default Clientes;