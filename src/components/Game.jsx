import React, { Component } from 'react'
import Field from './Field';
class Game extends Component {
    state = {
        field: [
            null, null, null, 
            null, null, null,
            null, null, null
        ]
    }

    render() {
        return (
            <div className="Field">
                {
                    this.state.field.map((item, i) => <Field key={i}/>)
                }
            </div>
        )
    }
}

export default Game;