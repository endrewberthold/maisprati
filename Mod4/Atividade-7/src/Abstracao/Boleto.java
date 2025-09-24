package Abstracao;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private final String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras != null ? codigoBarras.replaceAll("\\s+", "") : null;
    }

    @Override
    protected void validarPagamento() throws PagamentoInvalidoException {
        if (codigoBarras == null || !codigoBarras.matches("\\d{47,48}")) {
            throw new PagamentoInvalidoException(("Código de barras do boleto inválido"));
        }
    }

    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Boleto pago: código=%s, valor=R$ %s%n", codigoBarras, valor.setScale(2));
    }
}
