const Firstname = ({ type, placeholder, value, onChange}) => {
  return (
    <div>
      <label> First name </label>
      <br></br>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default Firstname