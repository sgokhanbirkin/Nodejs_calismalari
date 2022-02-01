const first = () => {
    console.log('First');
    second();
}

const second = () => {
    setTimeout(() => {
        console.log('Second');
    }, 2000);
    
    third();
}

const third = () => {
    console.log('Third');
}

first();