import { useState } from "react"
import { useRouter } from "next/navigation"

const RestaurantLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const router = useRouter()

  async function handleChange() {
  if (!email || !password) {
    setError(true)
    return false
  } else {
    setError(false)
  }

  try {
    let response = await fetch("/api/restaurant", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ email, password, login: true })
    })
    
    let result = await response.json()                // ✅ result वेरिएबल में सेव किया
    console.log("Login Response:", result)
    if (result.success && result.data) {
      let userData = result.data;
      delete userData.password; 
      localStorage.setItem("restaurantUser", JSON.stringify(userData))
      router.push("/restaurant/dashboard")
    } else {
      alert("Login failed: Invalid credentials")
    }
  } catch (error) {
    console.error(error);
    alert("Network error")
  }
}

  return (
    <>
      <h3>Login Component</h3>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter the name" className="input-field" value={email} onChange={((e) => setEmail(e.target.value))} />
        {
          error && !email && <span className="input-error">Enter valid email</span>
        }
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Enter the password" className="input-field" value={password} onChange={((e) => setPassword(e.target.value))} />
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

export default RestaurantLogin