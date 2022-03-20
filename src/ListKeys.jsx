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

const App = () => {
    const renderCustomer = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li >{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div key={`skill-${index}`} style={{paddingLeft: '30px'}}>
                <li >{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <h2>Welcome to the future</h2>
            <div>
                <ul>
                    {listCustomer.map(renderCustomer)}
                </ul>
            </div>
        </div>
    )
}

export default App