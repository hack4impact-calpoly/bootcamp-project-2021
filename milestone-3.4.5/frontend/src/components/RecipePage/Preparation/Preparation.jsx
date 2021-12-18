import React from 'react';

export default function Preparation({recipe}) {
    return (
        <div>
            <h2>Preparation</h2>
            <ol>
                {recipe ? (
                    recipe.instructionList.map(instruction => {
                        return <li key={instruction}>{instruction}</li>
                    })) : (
                        <p> Loading ...</p>
                    )
                }
            </ol>
        </div>
    );
}
