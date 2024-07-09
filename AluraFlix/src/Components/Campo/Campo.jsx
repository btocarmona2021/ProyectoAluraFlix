
export const Campo = (props) => {
    const {id,type,place} = props

    return (
        <>
            <input type={type} id={id} placeholder={place} required={true}/>
        </>
    )
}