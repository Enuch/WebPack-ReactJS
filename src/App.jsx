import React from "react";

const buttonA = <button>First Button</button>
const buttonB = <button>Second Button</button>

const hasCustomer = false

const App = () => {

    const renderSee = () => (
            <div>
                Clique no botão abaixo para visualizar algo
                {buttonA}
            </div>
        )

    const renderAdd = () => (
            <div>
                Clique abaixo para cadastrar
                {buttonB}
            </div>
        )
        
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Enuch Santo</p>
            {hasCustomer ? renderSee() : renderAdd()}
        </div>
    )
}

export default App;