

const restaurantLogin = () => {
  return (
    <>
    
    <h3>Login Component</h3>

    <div className="input-wrapper">
      <input type ="text" placeholder="Enter the name" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter the password" className="input-field"/>
    </div>
      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </>
  )
}

export default restaurantLogin