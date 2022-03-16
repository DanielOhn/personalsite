import './Hobbies.css'

interface Hobby {
    name: string;
}

function Hobbies(props: Hobby) {
    return (
        <div className="main">
            <h3>{props.name}</h3>
        </div>
    )
}

export default Hobbies