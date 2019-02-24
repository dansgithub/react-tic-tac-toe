import React from 'react'

const Dialog = (props) => {
  return (
    <div className="Dialog">
        <div className="Dialog-Inner">
            <h2>the winner is: {props.winner}</h2>
        </div>
    </div>
  )
}

export default Dialog
