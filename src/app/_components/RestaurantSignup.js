import { useState } from "react"
import { useRouter } from "next/navigation"
const restaurantSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [c_password, setc_password] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const [error,setError] = useState(false)
  const [passwordError,setPasswordError]= useState(false)
  const router = useRouter()
  const handleSignup = async () => {
    if(password !== c_password){
      setPasswordError(true)
      return false
    } else{
      setPasswordError(false)
    }
    if(!email || !password || !c_password || !name || !city || !address || !contact){
      setError(true)
      return false
    } else{
      setError(false)

    }
    
    console.log(email, password, c_password, name, city, address, contact);
    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"   // ← यह ज़रूरी है!
      },
      body: JSON.stringify({ email, password, name, city, address, contact })
    })
    result = await result.json()
    console.log(result);
    if (result.success) {
      // alert("Restaurant registration is successfully")
      console.log(result);
      const {data} = result
      delete data.password
      localStorage.setItem("restaurantUser",JSON.stringify(result))
      router.push("/restaurant/dashboard")
    }
  }

  return (
    <>
      <div className="container">
        <h3>Sign up</h3>

        <div className="input-wrapper">
          <input type="text" placeholder="Enter Email id" className="input-field"
            value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
         {
          error && !email && <span className="input-error">Enter vailid email</span>
        }
        <div className="input-wrapper">
          <input type="password" placeholder="Enter the password" className="input-field"
            value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {
          passwordError && <span className="input-error">Password and confirm password is not match</span>
        }
         {
          error && !password && <span className="input-error">Enter vailid password</span>
        }
        <div className="input-wrapper">
          <input type="password" placeholder="Confirm password" className="input-field"
            value={c_password} onChange={(event) => setc_password(event.target.value)} />
        </div>
        {
          passwordError && <span className="input-error">Password and confirm password is not match</span>
        }
         {
          error && !c_password && <span className="input-error">Enter vailid confirm password</span>
        }
        <div className="input-wrapper">
          <input type="text" placeholder="Enter the Restaurant Name" className="input-field"
            value={name} onChange={(event) => setName(event.target.value)} />
        </div>
         {
          error && !name && <span className="input-error">Enter vailid name</span>
        }
        <div className="input-wrapper">
          <input type="text" placeholder="Enter City" className="input-field"
            value={city} onChange={(event) => setCity(event.target.value)} />
        </div>
         {
          error && !city && <span className="input-error">Enter vailid city</span>
        }
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Full Address" className="input-field"
            value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
         {
          error && !address && <span className="input-error">Enter vailid Address</span>
        }
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Contact No." className="input-field"
            value={contact} onChange={(event) => setContact(event.target.value)} />
        </div>
         {
          error && !contact && <span className="input-error">Enter vailid contact</span>
        }
        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>Signup</button>
        </div>

      </div>
    </>
  )
}

export default restaurantSignup