import React from "react";
import "../card/style.css"
export const Card = ({name,age,phone,id,editData,deleteitem})=>{
  const [changeInput,setchangeInput] = React.useState(false)
  const [input,setinput] = React.useState({name,age,phone})
  const change = (e)=>{

    setinput((p)=>{
      return {...p,[e.target.name]:e.target.value,id:id}  /// bunda qaysidir elementga target bulganda e.target.name:e.target.value siga quyib ketadi bu degani inputda har bitta targetda e.target.name ga qiymat berib ketaveradi
    })
  }
  const submit = (e)=>{
e.preventDefault()
editData(input)
setchangeInput(false)

  }
  return (
 <>
  {!changeInput ? 
  <div className="box">
    <h1>User:--{id}</h1>
    <div className="content">
    <span className="fetch">Name:</span><span className="usertitle">{name}</span>
    </div>

    <div className="content">
    <span className="fetch">Age:</span><span className="usertitle">{age}</span>
    </div>
    <div className="content">
    <span className="fetch">Phone:</span><span className="usertitle">{phone}</span>
    </div>
     <button className="edit" onClick={()=>setchangeInput(!changeInput)}>Edit</button>
     <button className="delete"  onClick={()=> deleteitem(id)}>Delete</button>
  </div> 
  :
  
<form onSubmit={submit} className={id ? "card-form" : "form"}>
<h1>User:--{id}</h1>
<input className={id ? "card-input" : "input"} onChange={change} type="text" defaultValue={name}  placeholder='name' name='name' /> <br />
      <input className={id ? "card-input" : "input"} onChange={change} type="text" defaultValue={age} placeholder='age' name='age' /> <br />
      <input className={id ? "card-input" : "input"} onChange={change} type="text" defaultValue={phone}  placeholder='phone' name='phone' /> <br />
      <button  className="save" type='submit'>Save</button>
      <button className="cancel" onClick={()=>setchangeInput(false)} type='button'>Cancel</button>
</form>
   }
  </>
  )
}