package Strategy;

import java.math.BigDecimal;
import java.util.function.BiFunction;

/** Classe utilitária com estratégias prontas ou para composição */
public class FretePromocional {
    /**
     * Cria uma estratégia que dá frete grátis para pedidos acima de limite,
     * ou usa a estratégia base como fallback para pedidos menores.
     */
    public static CalculadoraFrete freteGratisAcimaDe(
            BigDecimal limite, CalculadoraFrete estrategiaBase) {
        return pedido -> {
            if (pedido.getValorTotal().compareTo(limite) >= 0) {
                return BigDecimal.ZERO;
            }
            // senão, delega para a estratégia base
            return estrategiaBase.calcular(pedido);
        };
    }
}
