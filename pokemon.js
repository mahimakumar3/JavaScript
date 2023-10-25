

const container = document.querySelector('#container');
const baseURL = "https://raw.githubusercontent.com/IzLuis/TeleStickers/master/pokemon/"

for (let i=101; i<201; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.webp`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}



