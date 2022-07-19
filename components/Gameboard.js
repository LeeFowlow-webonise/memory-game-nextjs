import { useEffect, useState } from 'react';
import createMemoryArray from '../util/createMemoryArray';
import gameboardStyles from '../styles/gameboard.module.css';
let colour, button;

const Gameboard = () => {
    const [count, setCount] = useState(0);
    const [memoryArray, setMemoryArray] = useState(['red', 'yellow']);
    const [colourArray, setColourArray] = useState([]);

    function colourSelector(colour){
        console.log(colour);
        setColourArray(colourArray => [...colourArray, colour]);
        setCount(count + 1);

        //this is where it will have to check itself against the memoryArray
    }

    async function displayMemory(memoryArray){
        await buttonDisabler(['redButton', 'yellowButton', 'blueButton', 'greenButton']);
        let i;
        let ops = memoryArray.length * 2;
        
        for (i = 0; i < ops; i++){
            if(i % 2 == 0){
                colour = memoryArray[i / 2];
                button = document.getElementById(colour + 'Button');
                button.style.transform = 'scale(0.95, 0.95)';

                await delay(800);
            } else {
                button.style.transform = 'scale(1, 1)';

                await delay(800);
            }
        }
    }

    useEffect(() => {
        let newColour = createMemoryArray();
        setMemoryArray([...memoryArray, newColour]);

        if (count == 0){             
            displayMemory([...memoryArray, newColour]);
        }

        if(colourArray[count - 1] != memoryArray[count - 1]){
            console.log('failed to match')
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

const delay = async() => {
    await new Promise(resolve => setTimeout(resolve, 800));
}

const buttonDisabler = async (buttons) => {
    let i;

    //currently, this disables all buttons, but sometimes the blue and green button
    //still have their active effects.
    for (i = 0; i < buttons.length; i++){
        let button = document.getElementById(buttons[i]);
        button.disabled = true;
        console.log(button);
    }
}