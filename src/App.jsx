

import './App.css'
import Todo from './Todo'
import Batsman from './Batsman'

function App() {

  return (
    <>
      <h1>REACT ONLy</h1>
      <Batsman></Batsman>

      <Todo Task="learn react" isDone={true}></Todo>
      <Todo Task="learn java" isDone={false}></Todo>
      <Todo Task="learn Dev" isDone={true}></Todo>
    </>
  )
}
// function Person(){
//   const age=23
//   return(
//     <div style={{border:'2px solid red',margin:'20px',padding:'20px'}}>
//       <p>i am a person</p>
//     </div>
//   )
// }
// function Developer(props){
//   console.log(props);
//   return(
//     <h2>i am a developer my name {props.name} </h2>
//   )
// }
// function Bangladesh(){
//   return(
//     <h3>i am from bangladesh</h3>
//   )
// }

export default App
