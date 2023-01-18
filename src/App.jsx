import React from 'react';
import './App.css'
import { Card } from './components/card/card';
function App() {
  const [input,setinput] = React.useState({name:"",age:"",phone:""})
  const [data,setdata] = React.useState([])
const change = (e)=>{

  setinput((p)=>{
    return {...p,[e.target.name]:e.target.value,id:data.length + 1}  /// bunda qaysidir elementga target bulganda e.target.name:e.target.value siga quyib ketadi bu degani inputda har bitta targetda e.target.name ga qiymat berib ketaveradi
  })
}
const submit = (e) =>{
  e.preventDefault()
  setdata((p)=>{
    return [...p,input]
  })
 setinput({name:"",age:"",phone:""})
 console.log(input);
}
console.log(data);
const editData = (item)=>{
console.log(item);
setdata(()=> data.map((el)=> el.id === item.id ? item : el))
}
const deleteitem = (id)=>{
setdata((data)=> data.filter((el)=>el.id !== id))
}
  return (
    <div className="App">
    <form className='form' onSubmit={submit}>
      <input className='input' required onChange={change} type="text" value={input.name} placeholder='name' name='name' />
      <input className='input'  required onChange={change} type="number" value={input.age} placeholder='age' name='age' />
      <input className='input' required onChange={change} type="tel" value={input.phone} placeholder='phone' name='phone' />
      <button className='submit' type='submit'>Submit</button>
    </form>
    {data?.map((p)=>{
      return <Card deleteitem={deleteitem} editData={editData} key={p.id} {...p}/>
    })}
    </div>
  )
}

export default App
