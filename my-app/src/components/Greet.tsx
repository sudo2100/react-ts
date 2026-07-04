// props로 name 전달
const Greet = ({name}: {name: string}) => {

    return(
        <div>
            <h2>Hello~ {name}!</h2>
        </div>
    )
}

export default Greet;