import React, { Component } from 'react'
import Field from './Field';
class Game extends Component {
    state = {
        field: [
            null, null, null,
            null, null, null,
            null, null, null
        ],
        player: true
    }

    setField = (e, i) => {
        const { field, player } = this.state;

        if(field[i] === null) {
            player ? field[i] = 0 : field[i] = 1;

            console.log(field);

            this.setState({
                field: field,
                player: !player
            })
        }
    }

    render() {
        return (
            <div className="Field">
                {
                    this.state.field.map((item, i) => <Field player={this.state.field[i]} key={i} onClick={(e) => this.setField(e, i)} />)
                }
            </div>
        )
    }
}

export default Game;
