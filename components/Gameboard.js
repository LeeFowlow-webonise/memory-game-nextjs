import { useEffect, useState } from 'react';
import gameboardStyles from '../styles/gameboard.module.css';
let count = 0;

const Gameboard = () => {
    const [colour, setColour] = useState('');

    useEffect(() => {
        count++
        console.log([colour, count]);
    }, [colour]);

    return(
        <div className={gameboardStyles.row}>
            <div className={gameboardStyles.column}>
                <button className={gameboardStyles.button} style={{backgroundColor: 'green'}} 
                    onClick={() => setColour('green')} /><br></br>
                <button className={gameboardStyles.button} style={{backgroundColor: 'red'}} 
                    onClick={() => setColour('red')} />
            </div>
            <div className={gameboardStyles.column}>
                <button className={gameboardStyles.button} style={{backgroundColor: 'yellow'}} 
                    onClick={() => setColour('yellow')} /><br></br>
                <button className={gameboardStyles.button} style={{backgroundColor: 'blue'}}
                onClick={() => setColour('blue')} />
            </div>
        </div>
    )
}

export default Gameboard