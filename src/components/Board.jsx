import React, { Component } from 'react'
import Field from './Field';
import Dialog from './Dialog';

class Board extends Component {
    state = {
        field: new Array(9).fill(null),
        player: true,
        magicSquareArray: [
            4, 9, 2,
            3, 5, 7,
            8, 1, 6
        ],
        player1: 0,
        player2: 0
    }

    setField = (i, magicSquareNumber) => {
        const { field, player } = this.state;

        if(field[i] === null) {
            player ? field[i] = "o" : field[i] = "x";

            this.setState({
                field: field,
                player: !player
            })
        }

        this.setMagicSquareNumber(magicSquareNumber);
    }

    resetGame = () => {
        const freshField = new Array(this.state.field.length).fill(null);

        this.setState({
            field: freshField,
            player1: 0,
            player2: 0
        })
    }

    setMagicSquareNumber = (magicSquareNumber) => {
        const { player, player1, player2 } = this.state;

        if(player) {
            this.setState({
                player1: player1 + magicSquareNumber
            })

        } else {
            this.setState({
                player2: player2 + magicSquareNumber
            })
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
                                onClick={() => this.setField(i, this.state.magicSquareArray[i])}
                                i = {i}
                                magicSquareNumber = {this.state.magicSquareArray[i]}
                            />
                        )
                    })
                }

                <button onClick={this.resetGame}>reset</button>

                <div>
                    {this.state.player1 === 15 ? <Dialog winner={"green"} /> : ""}
                    {this.state.player2 === 15 ? <Dialog winner= {"pink"} /> : ""}
                </div>
            </div>
        )
    }
}

export default Board;
