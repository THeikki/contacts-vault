const Address = ({ type, placeholder, value, onChange}) => {
    return (
      <div className="form-control">
        <label> Address </label>
        <br></br>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    )
  }

export default Address