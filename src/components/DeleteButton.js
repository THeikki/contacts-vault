const DeleteButton = ({ handleClick, text}) => {
    return (
      <button className="delete-button" onClick={handleClick}>
        {text}
      </button>
    )
  }

export default DeleteButton