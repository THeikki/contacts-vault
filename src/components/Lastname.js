const Lastname = ({ type, placeholder, value, onChange}) => {
  return (
    <div className="form-control">
      <label> Last name </label>
      <br></br>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default Lastname