package Strategy;

import java.math.BigDecimal;

/** Estratégia Sedex */
public class FreteSedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) throws FreteInvalidoException {
        String cep = pedido.getCepDestino();
        // Exemplo simples de validação de CEP/região:
        if (!cep.startsWith("9")) {
            // digamos que Sedex só atende CEPs que começam com '9' (exemplo fictício)
            throw new FreteInvalidoException("Sedex não atende o CEP: " + cep);
        }
        // lógica de cálculo:
        BigDecimal base = new BigDecimal("20.00");
        BigDecimal adicional = pedido.getValorTotal().multiply(new BigDecimal("0.02"));  // +2% sobre valor
        return base.add(adicional);
    }
}
