import { useEffect, useState } from "react"


function App() {

  const [todo,setTodo] = useState(1);
  const [data,setData] = useState({});
  const [load,setLoading] = useState(true);

  useEffect(function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + todo)
    .then(async res=> {
    const json = await res.json();
    setData(json);
    setLoading(false);
  });
  },[todo])

  return <div>
    <button onClick={() => {setTodo(1)}}>todo 1</button>
    <button onClick={() => {setTodo(2)}}>todo 2</button>
    <button onClick={() => {setTodo(3)}}>todo 3</button>
    <br />
    {load ? "loading ...." : data.title}
  </div>
}




// function Toggle(){

//   let [isVisible,setVisible] = useState(true);

//   return <div>
//     <button onClick={() => {setVisible(!isVisible)}}>click me</button>
//     {isVisible? <p>hey i am here</p> :<p>i am not here</p>}
//   </div>
  
// }

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
