import gameboardStyles from '../styles/gameboard.module.css';

const Gameboard = () => {
    return(
        <div className={gameboardStyles.row}>
            <div className={gameboardStyles.column}>
                <p>Here is #1</p>
                <p>Here is #2</p>
            </div>
            <div className={gameboardStyles.column}>
                <p>Here is #3</p>
                <p>Here is #4</p>
            </div>
        </div>
    )
}

export default Gameboard