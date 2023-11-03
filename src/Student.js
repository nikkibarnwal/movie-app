//class component

// import {Component} from 'react';
// class Student extends Component{
//     render(){
//         console.log(this.props);
//         const {name,marks}=this.props
//         return(
//           <>
//            <h1>Hello, {name}</h1>
//             <p>you have secured {marks} %</p>
//             <hr/>
//           </>
//         )
//     }
// }

//functional component is better than class component
 function Student(props){
    const {name,marks} = props;
    
    return(
        <>
           <h1>Hello, {name}</h1>
           <p>you have secured {marks} %</p>
           <hr/>
        </>
    )
 }
export default Student;