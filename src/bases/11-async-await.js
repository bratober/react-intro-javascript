

// const getImagePromesa = () => 
//     new Promise(resolve => 
//         resolve('https://asdasfasdfasdf.com'))
// getImagePromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKey = 'RkZTS6SjcnZyVFAnZaQrQN0WNES5eSE6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
       //Manejo del error
       console.error(error); 
    }
}
getImagen();
