"use client"
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import {useState} from "react"
import "./style.css"
const Restaurant =()=>{
    const [login,setLogin] =  useState(true)
    return (
        <>
      <div className="container">
        <RestaurantHeader />
          <h1>Restaurant Login/Signup page</h1>
        {
            login?<RestaurantLogin />:<RestaurantSignup />
        }
        <button className="button-link" onClick={()=>setLogin(!login)}>
            {login?"donot have account?Signin":"Already have an account?Login"}
        </button>
      </div>
        <RestaurantFooter />
        </>
    )
}
export default Restaurant