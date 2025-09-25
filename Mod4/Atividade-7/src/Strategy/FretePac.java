package Strategy;

import java.math.BigDecimal;

/** Estratégia PAC */
public class FretePac implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) throws FreteInvalidoException {
        String cep = pedido.getCepDestino();
        if (cep.startsWith("0")) {
            throw new FreteInvalidoException("PAC não atende o CEP: " + cep);
        }
        BigDecimal base = new BigDecimal("10.00");
        BigDecimal adicional = pedido.getValorTotal().multiply(new BigDecimal("0.01"));  // +1%
        return base.add(adicional);
    }
}
