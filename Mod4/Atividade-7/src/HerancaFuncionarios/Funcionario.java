package HerancaFuncionarios;

import java.math.BigDecimal;

public abstract class Funcionario {

    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio");
        }
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salario deve ser positivo");
        }
        this.nome = nome.trim();
        this.salario = salario;
    }
    public String getNome() {
        return nome;
    }
    public BigDecimal getSalario() {
        return salario;
    }

    public abstract BigDecimal calcularBonus();

    @Override
    public String toString() {
        return String.format("%s (Salário: R$ %,.2f)", getNome(), getSalario());
    }

}
