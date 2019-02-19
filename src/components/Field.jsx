import React from 'react'

const Field = (props) => {
    const styles = ['Field-item'];

    switch(props.player) {
        case 0:
            styles.push('Field-o');
            break;
        case 1:
            styles.push('Field-x');
            break;
    }

    return (
        <div className={styles.join(' ')} onClick={props.onClick}></div>
    )
}

export default Field;
