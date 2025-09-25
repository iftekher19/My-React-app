// see how it use props destructuring
export default function Todo({Task,isDone}){        
   if(isDone === true){
       return (
           <li>Done:{Task}</li>)
    
   }
   else {
       return (
           <li>Not Done:{Task}</li>
       )
   }
    
}

// export default function Todo(props) {
//     return (
//         <div>
//             <h2>{props.Task}</h2>
//             <p>{props.isDone ? "✅ Done" : "❌ Not done"}</p>
//         </div>
//     )
// }