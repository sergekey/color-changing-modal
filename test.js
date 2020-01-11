const modal = document.querySelector('#modal');

const colors = ['blueviolet', 'pink', 'green', 'blue', 'orange', 'brown', 'red'];

let modalColor = 0;
console.log(modalColor);

modal.onclick = changeColor;

function changeColor () {
        modalColor++;
        modal.style.backgroundColor = colors[modalColor];
        console.log(modalColor);
        if (modalColor > 5) {
            modalColor = -1;
        }

}

let btnMagic = document.querySelector('#btn_modal');
let btnMagic2 = document.querySelector('#btn_modal2');

btnMagic.onclick = showModal;
btnMagic2.onclick = hideModal;

function showModal () {
    let modal = document.querySelector('.modal_hidden').style.display = 'flex';
    document.querySelector('#btn_modal2').style.display = 'block';
    document.querySelector('#btn_modal').style.display = 'none';
}

function hideModal() {
    let modal = document.querySelector('.modal_hidden').style.display = 'none';
    document.querySelector('#btn_modal2').style.display = 'none';
    document.querySelector('#btn_modal').style.display = 'block';
}