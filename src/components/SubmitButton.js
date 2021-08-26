const SubmitButton = ({ handleClick, text}) => {
    return (
      <button className="submit-button" onClick={handleClick}>
        {text}
      </button>
    )
  }

export default SubmitButton