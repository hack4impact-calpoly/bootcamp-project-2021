import React from 'react';

export default function Preparation({instructions}) {
    const [newIngredient, setNewIngredient] = React.useState('');//add this
    const [newInstruction, setNewInstruction] = React.useState('');//add this
    const [newPosition, setNewPosition] = React.useState('');//add this

    return (
        <div>
            <h2>Preparation</h2>
            <ol id="instructionList">
                {
                    instructions.map(function(instruction){
                        return <li key={instruction}>{instruction}</li>;
                    })
                }
            </ol>

            <p><b>Add step</b></p>
            <input 
                id="newIngredient" 
                className="form-element" 
                placeholder="2 cups of spinach" 
                value={newIngredient} // add newIngredient as the input's value
                onChange={(e) => { // this event handler updates the value of newIngredient
                    setNewIngredient(e.target.value);
                }}
            />

            <p><b>Add step</b></p>
            <input 
                id="newInstruction" 
                placeholder="New step" 
                value={newInstruction}
                onChange={(e) => { 
                    setNewInstruction(e.target.value);
                }}
            />
            <input 
                id="addPosition" 
                placeholder="Insert position" 
                value={newPosition}
                onChange={(e) => { 
                    setNewPosition(e.target.value);
                }}
            />
            <button onClick={setNewPosition}>Add</button> 
            <br/>

            <p><b>Remove step (Enter step #)</b></p>
            {/* <input id="deleteInstruction" placeholder="Step to remove (e.g. 3)" value="" />
            <button onClick={deleteInst}>Remove</button> */}
        </div>
    );
}
