import {Card} from "../Card/Card.jsx";
import styled from "styled-components";

const Cardss = styled.div
    `
        width: 1280px;
        background-color: #111111;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 0 auto;
    `
export const Cards = () => {
    return (
        <Cardss>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Cardss>

    )
}