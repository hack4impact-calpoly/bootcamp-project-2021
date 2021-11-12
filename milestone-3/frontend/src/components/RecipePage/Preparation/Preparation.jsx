import React from 'react';

export default function Preparation({instructions}) {
    return (
        <div>
            <h2>Preparation</h2>
            <ol>
                {
                    instructions.map(function(instruction){
                        return <li key={instruction}>{instruction}</li>;
                    })
                }
            </ol>
        </div>
    );
}
