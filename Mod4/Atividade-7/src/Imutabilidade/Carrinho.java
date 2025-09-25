package Imutabilidade;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @param descontoPercentual 0 a 0.30 (30%)
 */
public record Carrinho(List<ItemCarrinho> itens, BigDecimal descontoPercentual) {
    public Carrinho(List<ItemCarrinho> itens, BigDecimal descontoPercentual) {
        this.itens = Collections.unmodifiableList(itens);
        this.descontoPercentual = descontoPercentual;
    }

    /**
     * Carrinho vazio
     */
    public static Carrinho vazio() {
        return new Carrinho(new ArrayList<>(), BigDecimal.ZERO);
    }

    /**
     * Adiciona item retornando um NOVO carrinho.
     */
    public Carrinho adicionarItem(Produto produto, int quantidade) {
        ItemCarrinho novoItem = new ItemCarrinho(produto, quantidade);
        List<ItemCarrinho> novaLista = new ArrayList<>(this.itens);
        novaLista.add(novoItem);
        return new Carrinho(novaLista, this.descontoPercentual);
    }

    /**
     * Remove produto retornando um NOVO carrinho.
     */
    public Carrinho removerProduto(Produto produto) {
        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : this.itens) {
            if (!item.produto().equals(produto)) {
                novaLista.add(item);
            }
        }
        return new Carrinho(novaLista, this.descontoPercentual);
    }

    /**
     * Aplica cupom (até 30%) retornando novo carrinho.
     */
    public Carrinho aplicarCupom(BigDecimal percentual) {
        if (percentual == null || percentual.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Percentual inválido.");
        }
        if (percentual.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Desconto máximo é 30%.");
        }
        return new Carrinho(this.itens,
                percentual.setScale(2, RoundingMode.HALF_EVEN));
    }

    public Dinheiro calcularTotal(Moeda moeda) {
        BigDecimal soma = BigDecimal.ZERO;
        for (ItemCarrinho item : itens) {
            soma = soma.add(item.getSubtotal().valor());
        }
        BigDecimal fatorDesconto = BigDecimal.ONE.subtract(descontoPercentual);
        soma = soma.multiply(fatorDesconto)
                .setScale(2, RoundingMode.HALF_EVEN);
        return new Dinheiro(soma, moeda);
    }

    @Override
    public String toString() {
        return "Carrinho{" +
                "itens=" + itens +
                ", desconto=" + descontoPercentual.multiply(new BigDecimal("100")) + "%" +
                '}';
    }
}

