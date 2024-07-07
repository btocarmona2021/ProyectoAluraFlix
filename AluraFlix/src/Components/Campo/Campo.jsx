
export const Campo = (props) => {
    const {type,place} = props

    return (
        <>
            <input type={type} placeholder={place}/>
        </>
    )
}