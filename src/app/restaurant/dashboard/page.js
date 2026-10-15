'use client'
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItem from "@/app/_components/AddFoodItem";
import "./../style.css"
import {useState} from "react"
const dashboard = () => {
  const [addItem,setAddItem] = useState(false)
  return (
    <>
    <RestaurantHeader />
    <button onClick={()=>setAddItem(true)}>Add Food</button>
    <button onClick={()=>setAddItem(false)}>Dashboard</button>
    {
      addItem ? <AddFoodItem /> : <div>welcome to dashboard</div>
    }
    
    
    </>
  )
}

export default dashboard