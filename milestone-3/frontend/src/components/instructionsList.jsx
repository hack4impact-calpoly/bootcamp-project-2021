import React from "react";

export default function InstructionsList({ instructions }) {
    const instructionList = instructions.map((instruction) =>
        <li key={instruction}>{instruction}</li>
    );
    return (
        <ol>{instructionList}</ol>
    );
}