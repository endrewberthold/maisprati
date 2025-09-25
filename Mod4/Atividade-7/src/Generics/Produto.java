package Generics;

import java.math.BigDecimal;

public class Produto implements Identificavel<Integer> {
    private final Integer id;
    private String nome;
    private BigDecimal preco;

    public Produto(Integer id, String nome, BigDecimal preco) {
        if (id == null) {
            throw new IllegalArgumentException("ID não pode ser nulo.");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo ou nulo.");
        }
        this.id = id;
        this.nome = nome.trim();
        this.preco = preco;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        this.nome = nome.trim();
    }

    public void setPreco(BigDecimal preco) {
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo ou nulo.");
        }
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Produto{id=" + id + ", nome='" + nome + "', preco=" + preco + "}";
    }
}
