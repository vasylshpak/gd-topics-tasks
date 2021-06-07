const area = document.getElementById('area')
const clean = document.getElementById('clear')

area.value = localStorage.getItem('textArea')

//oninput ??
area.addEventListener('change', event => {
    localStorage.setItem('textArea', area.value)
})

clean.addEventListener('click', event => {
    localStorage.removeItem('textArea')
    area.value = ''
})



