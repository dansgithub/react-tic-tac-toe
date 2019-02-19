import React, { Component } from 'react'
import Field from './Field';

class Board extends Component {
    state = {
        field: new Array(9).fill(null),
        player: true,
        reset: null
    }

    setField = (i) => {
        const { field, player } = this.state;

        if(field[i] === null) {
            player ? field[i] = 0 : field[i] = 1;

            this.setState({
                field: field,
                player: !player
            })
        }

        // TODO: finish calculation of winner
        this.calculateWinner();
    }

    resetGame = () => {
        const freshField = new Array(this.state.field.length).fill(null);
        this.setState({field: freshField})
    }

    calculateWinner = () => {
        const {field} = this.state;

        // horizoncal rows
        for(let i = 0; i <= 6; i+=3 ) {
            if(field[i] === 0  && field[i + 1] === 0 && field[i + 2] === 0) {
                console.log('wins');
            }
        }

        // vertical rows
        // diagonal rows
    }

    render() {
        return (
            <div className="Field">
                {
                    this.state.field.map((item, i) => {
                        return (
                            <Field
                                key={i}
                                player={this.state.field[i]}
                                onClick={() => this.setField(i)}
                            />
                        )
                    })
                }
                <button onClick={this.resetGame}>reset</button>
            </div>
        )
    }
}

export default Board;
