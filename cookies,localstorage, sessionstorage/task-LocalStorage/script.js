const area = document.getElementById('area')
const clearArea = document.getElementById('clear')

area.value = localStorage.getItem('textArea')

//oninput ??
area.addEventListener('change', event => {
    localStorage.setItem('textArea', area.value)
})

clearArea.addEventListener('click', event => {
    localStorage.removeItem('textArea')
    area.value = ''
})



