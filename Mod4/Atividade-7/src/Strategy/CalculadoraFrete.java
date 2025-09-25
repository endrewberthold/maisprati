package Strategy;

import java.math.BigDecimal;

public interface CalculadoraFrete {
    /**
     * Calcula o frete para o pedido dado.
     * Pode lançar FreteInvalidoException se CEP/região inválido.
     */
    BigDecimal calcular(Pedido pedido) throws FreteInvalidoException;
}
