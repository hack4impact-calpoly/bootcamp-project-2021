import styled from "styled-components";

export const Button = styled.button`
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    margin-left: 10px;
    padding: 12px 30px;
    background-color: ${({theme}) => theme.colors.header};
    color: ${({color}) => color}

    &:hover {
        opacity: 0.9;
        transform: scale(0.2);
    }
`