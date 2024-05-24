import './App.css'
import {useEffect, useState} from "react";
import Input from "./Input.jsx";

function App(props) {

    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')

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
                lastName: "Smith",
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
                <form autoComplete="off">
                    <Input
                        title="First Name"
                        type="text"
                        name="firstName"
                        autoComplete="firstNameNew"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></Input>
                    <Input
                        title="Last Name"
                        type="text"
                        name="lastName"
                        autoComplete="lastNameNew"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                    ></Input>
                    <Input
                        title="DOB"
                        type="date"
                        name="dob"
                        autoComplete="dobNew"
                        className="form-control"
                        onChange={(e) => setDob(e.target.value)}
                    ></Input>
                </form>
                <div>
                    First Name: {firstName}<br />
                    Last Name: {lastName}<br />
                    DOB: {dob}<br />
                </div>
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