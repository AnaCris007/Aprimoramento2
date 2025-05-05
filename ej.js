class Pilha{
    constructor () {
        this.itens = [];
    }

    //1 - Adicionar aluno à fila:
    add(item) {
        this.itens.push(item);
        console.log(`✔️ Elemento '${item}' empilhado.`);
    }

    //2 - Remover aluno da fila
    remove() { //Adiciona um elemento no FINAL da pilha
        if (this.estaVazia()) {
          console.log('⚠️ O documento já está vazio. Nada para remover.');
          return null;
        }
        const removido = this.itens.pop();
        console.log(`❌ Elemento '${removido}' desempilhado.`);
        return removido;
      }

    top() {
            if (this.estaVazia()) {
                console.log('O documento está vazio!')
              return null;
            } else {
                console.log(`O documento no topo da pilha é ${this.length - 1}`);
                return this.itens[this.itens.length - 1];
          } }

    view() {
        console.log('📦Documentos Pendentes:', this.itens.slice().reverse().join(' <- topo'));
    }
}

class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }


fila = new Fila();
pilha = new Pilha();
fila.enfileirar('Ana');
fila.enfileirar('João');
fila.enfileirar('Carlos');
fila. enfileirar('Pedro');

pilha.add('Doc 1');
pilha.add('Doc 2');
pilha.add('Doc 3');
pilha.add('Doc 4');