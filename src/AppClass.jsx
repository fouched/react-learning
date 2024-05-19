import {Component} from 'react';
import './AppClass.css'

export default class AppClass extends Component {

    render() {
        return (
            <>
                {/* eslint-disable-next-line react/prop-types */}
                <h1 className="h1-blue">{this.props.msg}</h1>
            </>
        )
    }
}