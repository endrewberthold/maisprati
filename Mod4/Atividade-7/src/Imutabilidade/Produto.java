package Imutabilidade;

import java.util.Objects;

public record Produto(String nome, Dinheiro precoUnitario) {
    public Produto {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome do produto inválido.");
        }
        if (precoUnitario == null) {
            throw new IllegalArgumentException("Preço não pode ser nulo.");
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Produto produto)) return false;
        return nome.equals(produto.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome);
    }

    @Override
    public String toString() {
        return nome + " (" + precoUnitario + ")";
    }
}
