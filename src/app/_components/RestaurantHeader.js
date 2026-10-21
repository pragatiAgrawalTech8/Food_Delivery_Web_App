'use client'
import Link from "next/link"
import {useRouter,usePathname} from "next/navigation"
import {useEffect,useState} from "react"
const RestaurantHeader = () => {
  const [details,setDetails] = useState(null)
  const router = useRouter()
  const pathName = usePathname()

  useEffect(()=>{
    let data = localStorage.getItem("restaurantUser")
    if(!data && pathName == "/restaurant/dashboard"){
      router.push("/restaurant")
    } else if(data && pathName == "/restaurant"){
      router.push("/restaurant/dashboard")
    }
    else if(data){
      setDetails(JSON.parse(data))
    }
  },[pathName])
  const logout=()=>{
    localStorage.removeItem("restaurantUser")
    router.push("/restaurant")
  }
  return (
    <div className="header-wrapper">
        <div className="logo">
            <img style={{width:100}} src="/foodDelivery.jpg" alt="" />
        </div>
        <ul>
            <li><Link href="/">Home</Link></li>
           
                {
                    details && details.data.name?
                    <> 
                    <li><Link href="/restaurant/dashboard">Profile</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                    </>
                    :<li><Link href="/restaurant">Login/SignUp</Link></li>
                }
        </ul>
    </div>
  )
}

export default RestaurantHeader