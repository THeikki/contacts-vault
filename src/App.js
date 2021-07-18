
import React from 'react'

const Infoline = (props) => {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        <input type="text" />
      </td>
    </tr>
  )
}

const Submit = () => {
  return (
    <div>
      <table>
        <tbody>
          <Infoline name="Name:" />
          <Infoline name="Address:" />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button >
     {props.text}
    </button>
  )
}

const App = () => (
  <div>
    <h1>give requested information</h1>
    <Submit/>
    <Button text="Submit"/>
  </div>
  
  
)

export default App
