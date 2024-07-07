import styled from "styled-components";

const SelectEstilizado = styled.select
    `
        height: 60px;
        border-radius: 10px;
        font-size: 20px;
        background-color: #191919;
        color: #F5F5F5;
        outline: 3px solid #555555;
        &:focus-within{
            outline-color: blueviolet;
            border: none;
            box-shadow: 0 0 20px 2px blueviolet;
        }
    `

export const Categorias = () => {
    return (
        <>
            <SelectEstilizado name="" id="">
                <option value="">Seleccione una categoría</option>
                <option value="">Categoria 01</option>
            </SelectEstilizado>

        </>
    )
}