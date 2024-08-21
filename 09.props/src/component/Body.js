
const Body = (props) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{props.address}</p>
            <p>{props.user}</p>
        </>
    )
}

export default Body;