import React from "react";
import listCustomer from "./listCustomers";
import Button from "./components/Button.jsx";


const showEvent = (cust) => {
    console.log("Evento click")
    console.log(cust)
}

const App = () => {

    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <Button onClick={() => showEvent(customer.id)}>Deletar</Button>
                <li >{customer.name} </li>

            </div>
        )
    }
 
    const handlerChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    return (
        <div>
            <h2>Welcome to the future</h2>
            <ul>{listCustomer.map(renderCustomer)}</ul>
            <input onChange={handlerChange}/>
            
        </div>
    )
}

export default App