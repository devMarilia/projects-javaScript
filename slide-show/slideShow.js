'use-strict'

const texto = document.querySelector('.text')

HTMLNovo = 'Slide Show em JavaScript  <br>';

texto.insertAdjacentHTML('afterbegin', HTMLNovo);

const images = [
    {'id': '1', 'url': './img/img001.png', 'name': 'teste'},
    {'id': '2', 'url': './img/img002.jpg'},
    {'id': '2', 'url': './img/img003.jpeg'},
    {'id': '2', 'url': './img/img004.jpeg'},
    {'id': '2', 'url': './img/img005.jpg'}
]

const containerItems = document.querySelector('#container-items')




const loadImages = (images, container ) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url
                }"/>
            </div>
        `
    })
}
loadImages(images, containerItems)

//transition
let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);