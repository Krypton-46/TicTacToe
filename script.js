let button = document.querySelector('button');
button.addEventListener('click', () => {
    let p = document.querySelector('p');
    p.remove();
    button.remove();
    let div=document.querySelector('.container');
    div.classList.remove('hidden');
});