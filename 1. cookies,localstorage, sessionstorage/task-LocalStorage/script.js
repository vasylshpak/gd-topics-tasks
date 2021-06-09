const area = document.getElementById('area');
const clean = document.getElementById('clear');
const inputStorage = window.localStorage;

area.value = inputStorage.getItem('textArea');

area.addEventListener('input', event => {
    inputStorage.setItem('textArea', area.value);
});

clean.addEventListener('click', event => {
    inputStorage.removeItem('textArea');
    area.value = '';
});