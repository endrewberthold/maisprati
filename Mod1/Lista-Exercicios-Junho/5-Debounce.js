function debounce(fn, delay) {
    let timeoutId = null
    return function (...args) {
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function pesquisar(texto){
    console.log(`Buscando por ${texto}`)
}

let pesquisaDebounced = debounce(pesquisar, 1000)