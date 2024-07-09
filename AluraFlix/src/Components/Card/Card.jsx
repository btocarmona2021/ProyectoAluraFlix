import styled from "styled-components";
import {BiEditAlt} from "react-icons/bi";
import {MdOutlineDeleteForever} from "react-icons/md";

const CardEstilizado = styled.div
    `
        width: 360px;
        height: 268px;
        border: 4px solid #6BD1FF;
        border-radius: 15px;
        box-shadow: 0 0 3px 7px #6BD1FF inset;
        overflow: hidden;
    `
const VideoEstilizado = styled.div
    `
        display: flex;
        position: relative;
        width: 360px;
        height: 218px;
        overflow: hidden;
        a img {
            width: 350px;
            height: 216px;
            object-fit: cover;
        }
       
    `
const EdicionEstilizado = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icono {
            font-size: 30px;
            color: #F5F5F5;
        }

        P {
            font-size: 20px;
            color: #F5F5F5;
        }

        div {
            display: flex;
            align-items: center;
            gap: 0 10px;
            padding: 0 40px;
            box-sizing: border-box;
            height: 40px;
        }

    `


export const Card = ({tarjeta}) => {

    const {id, titulo, enlace, imagen, categoria, descripcion} = tarjeta

    return (
        <CardEstilizado>
            <VideoEstilizado>
                <a href={enlace} target={'blank'}>
                    <img src={imagen} alt=""/>
                </a>
            </VideoEstilizado>
            <EdicionEstilizado>
                <div>
                    <MdOutlineDeleteForever className={'icono'}/>
                    <p>Borrar</p>
                </div>
                <div>
                    <BiEditAlt className={'icono'}/>
                    <p>Editar</p>
                </div>
            </EdicionEstilizado>
        </CardEstilizado>
    )
}