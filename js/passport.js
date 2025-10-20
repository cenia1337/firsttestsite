const changeButton = document.getElementById('changeln');

let isRussian = true;

function changeData() {
    if (isRussian) {
        document.getElementById('surname').textContent = 'Kolobov';
        document.getElementById('namepassport').textContent = 'Arseny';
        document.getElementById('fathername').textContent = 'Andreevich';
        document.getElementById('gender').textContent = 'male';
        document.getElementById('placebirth').textContent = 'Ufa';
    } else {
        document.getElementById('surname').textContent = 'Колобов';
        document.getElementById('namepassport').textContent = 'Арсений';
        document.getElementById('fathername').textContent = 'Андреевич';
        document.getElementById('gender').textContent = 'муж.';
        document.getElementById('placebirth').textContent = 'г. Уфа';
         }
    
    isRussian = !isRussian;
}
changeButton.addEventListener('click', changeData);
