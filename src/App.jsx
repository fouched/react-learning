import './App.css'
import {useEffect, useRef, useState} from "react";
import Input from "./Input.jsx";

function App(props) {

    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')

    // refs
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const dobRef = useRef(null)

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( lastName !== "" ) {
            addPerson(firstName, lastName, dob)
        }
    }

    const addPerson = (newFirst, newLast, newDOD) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOD,
        }

        const newList = crowd.concat(newPerson);
        const sorted = newList.sort((a, b) => {
            if (a.lastName.toUpperCase() < b.lastName.toUpperCase()) {
                return -1;
            } else if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) {
                return 1;
            }
            return 0;
        });

        setCrowd(sorted)
        setFirstName("")
        setLastName("")
        setDob("")

        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        dobRef.current.value = ""

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
            <hr />
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                    title="First Name"
                    type="text"
                    ref={firstNameRef}
                    name="firstName"
                    autoComplete="firstNameNew"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                ></Input>
                <Input
                    title="Last Name"
                    type="text"
                    ref={lastNameRef}
                    name="lastName"
                    autoComplete="lastNameNew"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                ></Input>
                <Input
                    title="Date of birth"
                    type="date"
                    ref={dobRef}
                    name="dob"
                    autoComplete="dobNew"
                    className="form-control"
                    onChange={(e) => setDob(e.target.value)}
                ></Input>
                <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
            <div>
                First Name: {firstName}<br />
                Last Name: {lastName}<br />
                Date of birth: {dob}<br />
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