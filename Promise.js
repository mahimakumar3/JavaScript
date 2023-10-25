const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        const rand = Math.random();
        setTimeout(() =>{
            if(rand < 0.7){
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR!!');
        },1000)
    })
}

fakeRequest('www.google.com')
    .then((data) =>{
        console.log("DONE WITH REQUEST!!")
        console.log('data is:', data)
    })
    .catch((err) =>{
        console.log("OHH!! ERROR", err)
    })


    const delayedColorChange = (color, delay) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            },delay)
        })
    }

    delayedColorChange('red', 1000)
        .then(() =>  delayedColorChange('orange',1000))
        .then(() =>  delayedColorChange('blue',1000))
        .then(() =>  delayedColorChange('green',1000))
        .then(() =>  delayedColorChange('grey',1000))
        .then(() =>  delayedColorChange('black',1000))