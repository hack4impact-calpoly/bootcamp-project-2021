import React from 'react';

export default function PreparationForm({newStep, onChangeStep, insertPosition, onChangePos, onClickInst}) {
    return (
        <div>
            <p><b>Add an instruction <i>(NOTE: LOWEST STEP IS 1)</i> </b></p>
            <input 
                placeholder="New step"
                value={newStep} 
                onChange={onChangeStep}
            />
            <input 
                placeholder="Insert position"
                value={insertPosition} 
                onChange={onChangePos}
            />
            <button onClick={onClickInst}>Add</button>
            <br/>
        </div>
    );
}
