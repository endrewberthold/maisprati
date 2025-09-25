package Strategy;

import java.math.BigDecimal;

/** Estratégia Retirada na loja (frete = zero se local permitido) */
public class FreteRetiradaNaLoja implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) throws FreteInvalidoException {
        String cep = pedido.getCepDestino();
        // digamos que só é permitida retirada se CEP estiver numa determinada faixa:
        if (!cep.startsWith("90")) {
            throw new FreteInvalidoException("Retirada não permitida para CEP: " + cep);
        }
        return BigDecimal.ZERO;
    }
}
