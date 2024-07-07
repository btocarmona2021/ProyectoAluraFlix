import styled from "styled-components";

const FooterEstilizado = styled.footer
    `
        width: 1280px;
        height: 125px;
        background-color: #111111;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 3px solid #2271d1;
        box-shadow: 0 -3px 2px #2271d1;
        
        img{
            width: 168px;
            height: 40px;
        }
    `

export const Footer = () => {
    return (
        <FooterEstilizado>
            <img src="/img/logo.png" alt="Logo"/>
        </FooterEstilizado>
    )
}