package Imutabilidade;

import java.math.BigDecimal;

public class MainCarrinho {
    public static void main(String[] args) {

        Produto arroz = new Produto("Arroz 5kg", new Dinheiro(new BigDecimal("22.90"), Moeda.BRL));
        Produto feijao = new Produto("Feijão 1kg", new Dinheiro(new BigDecimal("7.50"), Moeda.BRL));
        Produto cafe   = new Produto("Café 500g", new Dinheiro(new BigDecimal("14.80"), Moeda.BRL));

        Carrinho carrinho = Carrinho.vazio();
        System.out.println("Carrinho inicial: " + carrinho);

        carrinho = carrinho.adicionarItem(arroz, 2);
        carrinho = carrinho.adicionarItem(feijao, 3);
        carrinho = carrinho.adicionarItem(cafe, 1);
        System.out.println("Carrinho após adições: " + carrinho);
        System.out.println("Total atual: " + carrinho.calcularTotal(Moeda.BRL));

        carrinho = carrinho.aplicarCupom(new BigDecimal("0.20"));
        System.out.println("Com cupom de 20%: " + carrinho);
        System.out.println("Total com desconto: " + carrinho.calcularTotal(Moeda.BRL));

        carrinho = carrinho.removerProduto(feijao);
        System.out.println("Após remover feijão: " + carrinho);
        System.out.println("Total final: " + carrinho.calcularTotal(Moeda.BRL));

        try {
            carrinho.aplicarCupom(new BigDecimal("0.40"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro esperado: " + e.getMessage());
        }
    }
}
