import { useEffect, useState } from 'react';
import gameboardStyles from '../styles/gameboard.module.css';

const Gameboard = () => {
    const [count, setCount] = useState(0);
    const [memoryArray, setMemoryArray] = useState(['start', 'yellow', 'blue', 'red', 'green']);
    const [colourArray, setColourArray] = useState(['start']);

    function colourSelector(colour){
        setColourArray(colourArray => [...colourArray, colour]);
        setCount(count + 1);
    }

    useEffect(() => {
        console.log([memoryArray, colourArray, count]);
        console.log(colourArray[count]);

        if(colourArray[count] != memoryArray[count]){
            console.log('failed to match')
        }

    }, [colourArray]);

    return(
        <div className={gameboardStyles.row}>
            <div className={gameboardStyles.column}>
                <button className={gameboardStyles.button} style={{backgroundColor: 'green'}} 
                    onClick={() => colourSelector('green')} /><br></br>
                <button className={gameboardStyles.button} style={{backgroundColor: 'red'}} 
                    onClick={() => colourSelector('red')} />
            </div>
            <div className={gameboardStyles.column}>
                <button className={gameboardStyles.button} style={{backgroundColor: 'yellow'}} 
                    onClick={() => colourSelector('yellow')} /><br></br>
                <button className={gameboardStyles.button} style={{backgroundColor: 'blue'}}
                onClick={() => colourSelector('blue')} />
            </div>
        </div>
    )
}

export default Gameboard