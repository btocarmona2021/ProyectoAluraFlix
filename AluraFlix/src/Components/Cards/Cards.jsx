import {Card} from "../Card/Card.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {buscar} from "../../ConexionApi/ConexionApi.jsx";

const ContenedorCards = styled.div`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #111111;
    padding: 20px;

    button {
        width: auto;
        height: 56px;
        border-radius: 15px;
        background-color: #6bd1ff;
        font-family: Roboto, sans-serif;
        font-weight: normal;
        font-size: 32px;
        color: #f5f5f5;
        padding: 0 10px;
    }
`

const Cardss = styled.div`
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
`

export const Cards = ({url, url2}) => {

    const [tarjetas, setTarjetas] = useState([]);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscar(url, setTarjetas).catch((error) => console.log(error));
        buscar(url2, setCategorias).catch((error) => console.log(error));
    }, [url, url2]);

    return (
        <ContenedorCards>
            {categorias.map((categoria) => {//frontend
                const tarjetasFiltradas = tarjetas.filter((tarjeta) => tarjeta.categoria === categoria.nombreequipo);
                if (tarjetasFiltradas.length === 0) {
                    return null; // No renderizar si no hay tarjetas
                }
                return (
                    <ContenedorCards key={categoria.nombreequipo}>
                        <button>{categoria.nombreequipo}</button>
                        <Cardss>
                            {tarjetasFiltradas.map((tarjeta) => (
                                <Card tarjeta={tarjeta} key={tarjeta.id}/>
                            ))}
                        </Cardss>
                    </ContenedorCards>
                );
            })}
        </ContenedorCards>
    )
}