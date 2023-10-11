const Btn = document.getElementById('btn');

const textOne = document.getElementById('text');

Btn.addEventListener('click' , () => {
    window.setTimeout(() => {
        textOne.textContent = 'ボタンをクリックしました';
    },2000);
});




