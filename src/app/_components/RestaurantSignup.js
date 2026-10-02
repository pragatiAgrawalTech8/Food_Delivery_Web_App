
const restaurantSignup = () => {
  return (
     <>
    <div className="container">
    <h3>Sign up</h3>

    <div className="input-wrapper">
      <input type ="text" placeholder="Enter the name" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter the password" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Confirm password" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter the Restaurant Name" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter City" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter Full Address" className="input-field"/>
    </div>
    <div className="input-wrapper">
      <input type ="password" placeholder="Enter Contact No." className="input-field"/>
    </div>
      <div className="input-wrapper">
        <button className="button">Signup</button>
      </div>
     
      </div>
    </>
  )
}

export default restaurantSignup