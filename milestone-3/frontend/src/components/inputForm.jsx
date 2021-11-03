import React from "react";
import './inputForm.css';

export default function InputForm({ formType, newElement, onChange, onAdd }) {
    return (
        <div class="inputForm">
            <h4 class="inputFormHeader">Add {formType}</h4>
            <div class="inputFormInput">
                <label>{formType}:</label>
                <input value={newElement} onChange={onChange} class="inputBox" placeholder={formType}/>
            </div>
            <button onClick={onAdd} class="inputButton">Add {formType}</button>
        </div>
    );
}