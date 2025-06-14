class Node {
    constructor(value) {
        this.value = value
        this.anterior = null
        this.proximo = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    inserirInicio(v){
        let novo = new Node(v)
        if(!this.head){
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++
    }
    inserirFim(v) {
        let novo = new Node(v)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }
        this.length++
    }
        inserirEm(indice, value){

        if (indice < 0 || indice > this.length) {
            throw RangeError("Indice esta fora dos limites")
        }
        if (indice === 0) {
            return this.inserirInicio(value)
        }
        if (indice === this.length) {
            return this.inserirFim(value)
        }
        let atual = this.head

        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }
        let novo = new Node(value)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }
    removerEm(indice){
        if (indice < 0 || indice > this.length) {
            throw RangeError("Indice esta fora dos limites")
        }
        let removido

        if(this.length === 1){
            removido = this.head
            this.head = this.tail = null
        } else if(indice === 0) {
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if(indice === this.length - 1){
            removido = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            let atual = this.head

            for(let i = 0; i < indice; i++) {
                atual = atual.proximo
            }
            removido = atual
            const { proximo, anterior} = atual
            anterior.proximo = proximo
            proximo.anterior = anterior
        }
        this.length--
    }
    imprimirInicio(){
        let atual = this.head
        let str = ""
        while(atual){
            str += atual.value + '<->'
            atual = atual.proximo
        }
        str += "null"
        console.log(`Frente: ${str}`)
    }
    imprimirFim(){
        let atual = this.tail
        let str = ""
        while(atual){
            str += atual.value + '<->'
            atual = atual.anterior
        }
        str += "null"
        console.log(`Trás: ${str}`)
    }
}
let lista = new DoublyLinkedList()
lista.inserirInicio(10)
lista.inserirInicio(9)
lista.inserirInicio(8)
lista.inserirFim(111)
lista.inserirEm(4,132)
lista.removerEm(0)
lista.imprimirInicio()