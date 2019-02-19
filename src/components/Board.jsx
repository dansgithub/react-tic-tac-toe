import React, { Component } from 'react'
import Field from './Field';

class Board extends Component {
    state = {
        field: new Array(9).fill(null),
        player: true,
        reset: null,
        winner: null
    }

    setField = (i) => {
        const { field, player } = this.state;

        if(field[i] === null) {
            player ? field[i] = "o" : field[i] = "x";

            this.setState({
                field: field,
                player: !player
            })
        }

        // TODO: finish calculation of winner for both
        this.calculateWinner();
    }

    resetGame = () => {
        const freshField = new Array(this.state.field.length).fill(null);

        this.setState({
            field: freshField,
            winner: null
        })
    }

    calculateWinner = () => {
        const { field } = this.state;


        for(let i = 0; i <= 6; i+=3 ) {
            if(field[i] === "o"  && field[i + 1] === "o" && field[i + 2] === "o") {
                this.setState({
                    winner: true
                })
            }
        }

        for(let i = 0; i <=6; i++) {
            if(field[i] === "o" && field[3 + i] === "o" && field[6 + i] === "o") {
                this.setState({
                    winner: true
                })
            }
        }

        for(let i = 0; i <=2; i+=2) {
            if(field[i] === "o" && field[4] === "o" && field[8 - i] === "o") {
                this.setState({
                    winner: true
                })
            }
        }
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
                                i = {i}
                            />
                        )
                    })
                }
                <button onClick={this.resetGame}>reset</button>

                winner: {this.state.winner ?  "there is a winner" : "not yet"}
            </div>
        )
    }
}

export default Board;
