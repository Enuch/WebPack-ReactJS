import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Enuch',
        skills: ['JS', 'reactSJ', 'Node']
    },
    {
        id: 2,
        name: 'Ilson',
        skills: ['JS', 'reactSJ', 'Node']
    },
    {
        id: 3,
        name: 'Yuri',
        skills: ['JS', 'reactSJ', 'Node']
    },
    {
        id: 4,
        name: 'Niedson',
        skills: ['JS', 'reactSJ', 'Node']
    }
]

const showEvent = (cust) => {
    console.log("Evento click")
    console.log(cust)

}


const App = () => {

    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <button onClick={(e) => showEvent(customer.id)}>Mostrar evento</button>
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