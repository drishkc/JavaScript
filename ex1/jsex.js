const button = document.querySelector('#btn');
const container = document.querySelector('#container');
const heading1 = document.querySelector('#heading1');
console.log(3);
let isToggled = false;

button.addEventListener('click', () => {

    if(!isToggled){
        heading1.style.color = 'black';
        container.style.background = 'white';
        document.body.style.background = 'black';
        container.style.boxShadow = "0 2px 12px rgb(255, 255, 255)";
        console.log('dark mode');
    }
    else {
        heading1.style.color = 'white';
        container.style.background = 'black';
        document.body.style.background = 'white';
        container.style.boxShadow = "0 3px 12px rgba(0, 0, 0, 0.5)";
        console.log('light mode');
    }
    isToggled = !isToggled;
});

