import React, { Component } from 'react'
import Field from './Field';
class Game extends Component {
    state = {
        field: new Array(9).fill(null),
        player: true,
        reset: null
    }

    setField = (e, i) => {
        const { field, player } = this.state;

        if(field[i] === null) {
            player ? field[i] = 0 : field[i] = 1;

            this.setState({
                field: field,
                player: !player
            })
        }
    }

    resetGame = () => {
        const freshField = new Array(this.state.field.length).fill(null);
        this.setState({field: freshField})
    }

    render() {
        return (
            <div className="Field">
                {
                    this.state.field.map((item, i) => <Field player={this.state.field[i]} key={i} onClick={(e) => this.setField(e, i)} />)
                }
                <button onClick={this.resetGame}>reset</button>
            </div>
        )
    }
}

export default Game;
