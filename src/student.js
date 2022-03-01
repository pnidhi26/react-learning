import React, {Component} from "react";
import PropTypes from "prop-types";

// // Functional Component

// const Student = props => {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2> Age: {props.age} </h2>
//         </div>
//         )
// };


// Class Component

class Student extends Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2> Age: {this.props.age} </h2>
            </div>
            )
    }
}


Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Student;