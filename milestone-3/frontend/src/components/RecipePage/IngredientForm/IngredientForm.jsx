import React from 'react';

export default function IngredientForm({newElement, onChange, onClick}) {
    return (
        <div>
            <p><b>Add an ingredient</b></p>
            <input 
                placeholder="e.g. 1 cup berries"
                value={newElement} 
                onChange={onChange}
            />
            <button onClick={onClick}>Add</button>
            <br/>
        </div>
    );
}
