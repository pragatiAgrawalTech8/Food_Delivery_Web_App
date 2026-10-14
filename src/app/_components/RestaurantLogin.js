import {useState} from "react"

const restaurantLogin = () => {
  const [email,setEmail] =  useState()
  const [password,setPassword] = useState()
  const [error,setError] = useState(false)
  async function  handleChange() {
    if(!email || !password){
      setError(true)
      return false
    } else{
      setError(false)
    }
    // console.log(email,password);
    let response = await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,login:true})
    })
    response = await response.json()
    if(response.success){
      alert("Login Successful")
    }
  }

  return (
    <>
      <h3>Login Component</h3>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter the name" className="input-field" value={email} onChange={((e)=>setEmail(e.target.value))} />
        {
          error && !email && <span className="input-error">Enter valid email</span>
        }
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter the password" className="input-field" value={password} onChange={((e)=>setPassword(e.target.value))} />
        {
          error && !password && <span className="input-error">Enter valid password</span>
        }
      </div>
      <div className="input-wrapper">
        <button onClick={handleChange} className="button">Login</button>
      </div>
    </>
  )
}

export default restaurantLogin