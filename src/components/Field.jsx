import React from 'react'

const Field = (props) => {
    const styles = ['Field-item'];

    switch(props.player) {
        case "o":
            styles.push('Field-o');
            break;
        case "x":
            styles.push('Field-x');
            break;
        default:
            styles.push('Field-item');
    }

    return (
        <div className={styles.join(' ')} onClick={props.onClick}>{props.magicSquareNumber}</div>
    )
}

export default Field;
