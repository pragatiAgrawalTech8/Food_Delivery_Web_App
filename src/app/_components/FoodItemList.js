import { useEffect, useState } from "react"

const FoodItemList = () => {
    const [foodItems, setFoodItem] = useState([])
    useEffect(() => {
        loadFoodItems()
    }, [])

    const loadFoodItems = async () => {
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        const resto_id=restaurantData._id
        console.log(restaurantData._id);
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+resto_id)
        response = await response.json()
        console.log("API Result:", response)
        if (response.success) {
            setFoodItem(response.result)
        } else {
            alert("food item list not loading")
        }
    }
    return (
        <div>
            <h1>Food Item</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodItems.map((item,key)=>(
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.image}</td>
                        <td><button>Delete</button><button>Edit</button></td>
                    </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}

export default FoodItemList