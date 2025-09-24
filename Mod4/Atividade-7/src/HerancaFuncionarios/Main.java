package HerancaFuncionarios;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Funcionario> funcionarios = getFuncionarios();

        System.out.println("--- Bonus por Funcionario ---");
        for (Funcionario f : funcionarios) {
            System.out.printf("%s -> Bonus: R$ %,.2f%n",
                    f.toString(),
                    f.calcularBonus());
        }
        
        try {
            Funcionario invalido = new Gerente("Invalido", new BigDecimal("-12000.00"));
        } catch (IllegalArgumentException e) {
            System.out.println("\nErro ao criar funcionário. " + e.getMessage());
        }
    }

    private static List<Funcionario> getFuncionarios() {
        Funcionario gerente1 = new Gerente("Alice", new BigDecimal("12000.00"));
        Funcionario gerente2 = new Gerente("João", new BigDecimal("8000.00"));
        Funcionario dev1 = new Gerente("Pedro", new BigDecimal("7000.00"));
        Funcionario dev2 = new Gerente("Paulo", new BigDecimal("11000.00"));

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(gerente1);
        funcionarios.add(gerente2);
        funcionarios.add(dev1);
        funcionarios.add(dev2);
        return funcionarios;
    }
}
