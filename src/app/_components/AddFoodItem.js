import {useState} from "react"

const AddFoodItem = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [path,setPath] = useState("")
    const [description,setDescription] = useState("")

    const handleAddFoodItem=async()=>{
        console.log(name,price,path,description);
        let resto_id
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if(restaurantData){
          resto_id=restaurantData._id
        }
        // let response = await fetch("http://localhost:3000/restaurant/dashboard/foods",{
        let response = await fetch("/api/restaurant/foods",{
          method:"POST",
          body:JSON.stringify({name,price,path,description,resto_id})
        })
        response= await response.json()
        if(response.success){
          alert("Food item added")
        }
    }

  return (
    <div className="container">
        <h1>Add food item</h1>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter food name" className="input-field"
         value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter price" className="input-field"
         value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter path image" className="input-field"
         value={path} onChange={(e)=>setPath(e.target.value)}/>
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter food description" className="input-field"
         value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div  className="input-wrapper"> 
        <button className="button" onClick={handleAddFoodItem}>Add food item</button>
        </div>
    </div>
  )
}

export default AddFoodItem