let colours = ['yellow', 'blue', 'red', 'green'];

const createMemoryArray = () => {
    let n = Math.floor(Math.random() * 4);
    let newColour = colours[n];

    return newColour
}

export default createMemoryArray