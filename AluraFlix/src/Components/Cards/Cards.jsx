import {Card} from "../Card/Card.jsx";
import styled from "styled-components";

const ContenedorCards = styled.div
    `   width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: #111111;
        padding: 20px;
        button{
            width: 350px;
            height: 56px;
            border-radius: 15px;
            background-color: #6BD1FF;
            font-family: Roboto,sans-serif;
            font-weight: normal;
            font-size: 32px;
            color: #F5F5F5F5;
        }
    `
const Cardss = styled.div
    `
        width: 1280px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 0 auto;
    `
export const Cards = () => {
    return (
        <ContenedorCards>
            <button>CATEGORIA</button>
            <Cardss>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Cardss>
        </ContenedorCards>
    )
}