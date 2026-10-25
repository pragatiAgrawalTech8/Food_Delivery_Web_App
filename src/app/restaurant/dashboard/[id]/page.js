'use client'
import {useState,use,useEffect} from "react"
import {useRouter} from "next/navigation"
const EditFoodItem = (props) => {
    const params = use(props.params)
    const id = params.id
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [path,setPath] = useState("")
    const [description,setDescription] = useState("")
    const [error,setError] = useState(false)
    const router = useRouter()

    useEffect(()=>{
      handleLoadFoodItem()
    },[])
    const handleLoadFoodItem = async()=>{
      let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/"+id)
      response = await response.json()
      if(response.success){
        console.log(response.result);
        setName(response.result.name)
        setPrice(response.result.price)
        setPath(response.result.path)
        setDescription(response.result.description)
      }
    }
    const handleEditFoodItem=async()=>{
        console.log(name,price,path,description);
        if(!name || !price || !path || !description){
          setError(true)
          return false
        } else{
          console.log(name,price,path,description);
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/"+id,{
          method:"PUT",
          body:JSON.stringify({name,price,path,description})
        }) 
        response = await response.json()
        if(response.success){
          router.push("../dashboard")
        } else{
          alert("Data is not updated please try again")
        }
       
    }

  return (
    <div className="container">
        <h1>Edit food item</h1>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter food name" className="input-field"
         value={name} onChange={(e)=>setName(e.target.value)}/>
         {
          error && !name && <span className="input-error">Please enter valid name</span>
         }
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter price" className="input-field"
         value={price} onChange={(e)=>setPrice(e.target.value)}/>
         {
          error && !price && <span className="input-error">Please enter valid price</span>
         }
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter path image" className="input-field"
         value={path} onChange={(e)=>setPath(e.target.value)}/>
         {
          error && !path && <span className="input-error">Please enter valid path</span>
         }
        </div>
        <div  className="input-wrapper"> 
        <input type="text" placeholder="enter food description" className="input-field"
         value={description} onChange={(e)=>setDescription(e.target.value)}/>
         {
          error && !description && <span className="input-error">Please enter valid description</span>
         }
        </div>
        <div  className="input-wrapper"> 
        <button className="button" onClick={handleEditFoodItem}>Update food item</button>
        </div>
        <div  className="input-wrapper"> 
        <button className="button" onClick={()=>router.push("../dashboard")}>Back food item list</button>
        </div>
    </div>
  )
}

export default EditFoodItem