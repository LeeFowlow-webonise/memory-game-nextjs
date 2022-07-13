import { useEffect, useState } from 'react';
import createMemoryArray from '../util/createMemoryArray';
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
        // console.log([memoryArray, colourArray, count]);

        if(colourArray[count] != memoryArray[count]){
            console.log('failed to match')
        }

        if (count === 0){
            let newColour = createMemoryArray();
            setMemoryArray([...memoryArray, newColour]);

            console.log(memoryArray);
        }

    }, [colourArray]);

    return(
        <div className={gameboardStyles.row}>
            <div className={gameboardStyles.column}>
                <button  id='greenButton' className={gameboardStyles.button} style={{backgroundColor: 'green'}} 
                    onClick={() => colourSelector('green')} /><br></br>
                <button id='redButton' className={gameboardStyles.button} style={{backgroundColor: 'red'}} 
                    onClick={() => colourSelector('red')} />
            </div>
            <div className={gameboardStyles.column}>
                <button id='yellowButton' className={gameboardStyles.button} style={{backgroundColor: 'yellow'}} 
                    onClick={() => colourSelector('yellow')} /><br></br>
                <button id='blueButton' className={gameboardStyles.button} style={{backgroundColor: 'blue'}}
                onClick={() => colourSelector('blue')} />
            </div>
        </div>
    )
}

export default Gameboard