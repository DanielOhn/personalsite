import './Hobbies.css'

interface Hobby {
    name: string;
}

function Hobbies(props: Hobby) {
    return (
        <div className="main">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Hobbies