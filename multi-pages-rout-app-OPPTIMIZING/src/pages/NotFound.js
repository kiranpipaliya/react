import { Link } from "react-router-dom";


const NotFound = () => {
    return <div className="centered">
        <p>Page Not Fount !</p>
        <Link className="btn" to="/new-quote">Add Quote</Link>
    </div>
}

export default NotFound;