import './App.css'
import {useEffect, useState} from "react";

function App(props) {

    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([])

    const toggleTrue = () => {
        setIsTrue(!isTrue)
    }

    useEffect(() => {
        console.log("useEffect fired")

        let people = [
            {
                id: 1,
                firstName: "Mary",
                lastName: "Jones",
                dob: "1997-02-03"
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smit",
                dob: "1990-04-06"
            },
        ]
        setCrowd(people)
    }, []);

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
            <hr />
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => {
                    return <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
                })}
            </ul>
        </>
    )
}

export default App