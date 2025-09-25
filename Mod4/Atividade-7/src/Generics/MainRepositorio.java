package Generics;

import java.math.BigDecimal;
import java.util.Optional;

public class MainRepositorio {
    public static void main(String[] args) {
        IRepository<Produto, Integer> repoProduto = new InMemoryRepository<>();
        IRepository<Funcionario, String> repoFuncionario = new InMemoryRepository<>();

        Produto p1 = new Produto(1, "Mouse", new BigDecimal("150.00"));
        Produto p2 = new Produto(2, "Teclado", new BigDecimal("250.50"));

        repoProduto.salvar(p1);
        repoProduto.salvar(p2);

        System.out.println("Todos os produtos:");
        repoProduto.listarTodos().forEach(System.out::println);

        Optional<Produto> resultado = repoProduto.buscarPorId(1);
        System.out.println("Buscar produto ID=1: " + resultado);

        Optional<Produto> resultado2 = repoProduto.buscarPorId(99);
        System.out.println("Buscar produto ID=99 (não existe): " + resultado2);

        repoProduto.remover(2);
        System.out.println("Após remover produto ID=2:");
        repoProduto.listarTodos().forEach(System.out::println);

        try {
            repoProduto.remover(100);
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro esperado ao remover inexistente: " + e.getMessage());
        }

        Funcionario f1 = new Funcionario("f001", "Alice", new BigDecimal("5000"));
        repoFuncionario.salvar(f1);

        System.out.println("Funcionários: ");
        repoFuncionario.listarTodos().forEach(System.out::println);
    }
}
