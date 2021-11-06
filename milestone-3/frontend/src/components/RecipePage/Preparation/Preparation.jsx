import React from 'react';

export default function Preparation() {
    return (
        <div>
            <h2>Preparation</h2>
            <ol id="instructionList">
                <li> Place the milk, raspberries, banana, and spinach in the blender and blend until smooth. </li>
                <li> Pour into a glass and garnish with coconut. Serve immediately. </li>
                <li> Note-if I use fresh raspberries I like to throw in a few ice cubes to get a thicker/colder smoothie.
                </li>
            </ol>

            <p><b>Add step</b></p>
            <input id="newInstruction" placeholder="New step" value="" />
            <input id="addPosition" placeholder="Insert position" value="" />
            <button onclick="addInst()">Add</button>
            <br/>

            <p><b>Remove step (Enter step #)</b></p>
            <input id="deleteInstruction" placeholder="Step to remove (e.g. 3)" value="" />
            <button onclick="deleteInst()">Remove</button>
        </div>
    );
}
