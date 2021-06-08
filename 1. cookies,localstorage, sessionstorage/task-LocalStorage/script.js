// ';' in the end of each line

const area = document.getElementById('area')
const clean = document.getElementById('clear')

// name of localStorage prop should be saved as separate const, in case you want rename in, all you need to do is rename it in one place
area.value = localStorage.getItem('textArea')

//oninput ??
// Solution with 'change' will not works in case you add changes, not changing focus from textarea and refresh page. Last change will not be save.
area.addEventListener('change', event => {
    localStorage.setItem('textArea', area.value)
})

clean.addEventListener('click', event => {
    localStorage.removeItem('textArea')
    area.value = ''
})



