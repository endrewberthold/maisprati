package Generics;

import java.math.BigDecimal;

public class Funcionario implements Identificavel<String> {
    private final String id;
    private String nome;
    private BigDecimal salario;

    public Funcionario(String id, String nome, BigDecimal salario) {
        if (id == null || id.trim().isEmpty()) {
            throw new IllegalArgumentException("ID não pode ser nulo ou vazio.");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        if (salario == null || salario.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Salário não pode ser negativo ou nulo.");
        }
        this.id = id.trim();
        this.nome = nome.trim();
        this.salario = salario;
    }

    @Override
    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        this.nome = nome.trim();
    }

    public void setSalario(BigDecimal salario) {
        if (salario == null || salario.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Salário não pode ser negativo ou nulo.");
        }
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Funcionario{id='" + id + "', nome='" + nome + "', salario=" + salario + "}";
    }
}
