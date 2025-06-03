class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null
    }
    adicionarInicio(v) {
        let novo = new Node(v)
        novo.next = this.head
        this.head = novo
    }
    adicionarFim(v){
        let novo = new Node(v)
        if(this.head === null){
            this.head = novo
        } else {
            let atual = this.head.next
            while(atual.next !== null){
                atual = atual.next
            }
            atual.next = novo
        }
    }
    imprimir() {
        let atual = this.head
        let str = ""
        while (atual) {
            str += atual.value + "->"
            atual = atual.next
        }
        str += 'null'
        console.log(str)
    }
}

let lista = new linkedList()

lista.adicionarInicio(10)
lista.adicionarInicio(9)
lista.adicionarInicio(8)
lista.adicionarFim(11)

lista.imprimir()