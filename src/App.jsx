import { useState } from "react"


function App() {

  return (
    <div>
      <Toggle />
    </div>
  )
}




function Toggle(){

  let [isVisible,setVisible] = useState(true);

  return <div>
    <button onClick={() => {setVisible(!isVisible)}}>click me</button>
    {isVisible? <p>hey i am here</p> :<p>i am not here</p>}
  </div>
  
}

// const style = {
//   backgroundColor:"red",
//   borderRadius:10,
//   height:200,
//   width:200

// }


// function MyCard() {
//   return <div style={style}>
//     <div style={{display:"flex"}}>
//     <div style={{margin:10}}>
//       hi
//     </div>
//     <div style={{margin:10}}>
//       hello
//     </div>
//     </div>
//     <div style={{backgroundColor:"yellow"}}>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, beatae.
//     </div>

//   </div>
// }

export default App
