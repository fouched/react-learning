import './HelloWorld.css'
import {useState} from "react";

function HelloWorld(props) {

    const [isTrue, setIsTrue] = useState(true)

    const toggleTrue = () => {
        setIsTrue(!isTrue)
    }

    return(
        <>
            <hr/>
            {/* eslint-disable-next-line react/prop-types */}
            <h1 className="h1-green">{props.msg}</h1>
            <hr/>
            {isTrue &&
                <>
                    <p>The current value of isTrue is true</p>
                </>
            }
            <hr/>
            {isTrue
            ? <p>Is true</p>
            : <p>Is false</p>
            }
            <a href="#" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>
        </>
    )
}

export default HelloWorld