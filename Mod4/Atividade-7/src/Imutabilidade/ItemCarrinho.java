package Imutabilidade;

import java.math.BigDecimal;

public record ItemCarrinho(Produto produto, int quantidade) {
    public ItemCarrinho {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo.");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero.");
        }
    }

    public Dinheiro getSubtotal() {
        return produto.precoUnitario()
                .multiplicar(new BigDecimal(quantidade));
    }

    @Override
    public String toString() {
        return quantidade + "x " + produto.nome() + " = " + getSubtotal();
    }
}
