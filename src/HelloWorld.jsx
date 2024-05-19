import './HelloWorld.css'

function HelloWorld(props) {

    return(
        <>
            <hr />
            {/* eslint-disable-next-line react/prop-types */}
            <h1 className="h1-green">{props.msg}</h1>
        </>
    )
}

export default HelloWorld