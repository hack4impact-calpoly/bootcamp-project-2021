import React from 'react';

export default function Preparation({instructions}) {
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
            {/* <input id="newInstruction" placeholder="New step" value="" />
            <input id="addPosition" placeholder="Insert position" value="" />
            <button onClick="addInst()">Add</button> */}
            <br/>

            <p><b>Remove step (Enter step #)</b></p>
            {/* <input id="deleteInstruction" placeholder="Step to remove (e.g. 3)" value="" />
            <button onClick={deleteInst}>Remove</button> */}
        </div>
    );
}
