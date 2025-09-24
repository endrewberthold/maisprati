package Abstracao;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class CartaoCredito extends FormaPagamento {
    private final String numero;
    private final String titular;
    private final String validade;
    private final String cvv;

    public CartaoCredito(String numero, String titular, String validade, String cvv) {
        this.numero = numero != null ? numero.replaceAll("\\s+", "") : null;
        this.titular = titular;
        this.validade = validade;
        this.cvv = cvv;
    }

    @Override
    protected void validarPagamento() throws PagamentoInvalidoException {
        if (numero == null || !numero.matches("\\d{13,19}")){
            throw new PagamentoInvalidoException("Numero de cartão invalido - deve conter somente numeros");
        }
        if (!isValido(numero)){
            throw new PagamentoInvalidoException("Numero de cartão invalido - deve conter somente numeros");
        }
        if (titular == null || titular.trim().isEmpty()){
            throw new PagamentoInvalidoException("Nome do titular invalido");
        }

        boolean ok = false;
        DateTimeFormatter fmtShort = DateTimeFormatter.ofPattern("MM/yy");
        DateTimeFormatter fmtLong = DateTimeFormatter.ofPattern("MM/yyyy");
        YearMonth ym = null;
        try {
            ym = YearMonth.parse(validade, fmtShort);
            ok = true;
        } catch (DateTimeParseException e) {
            try {
                ym = YearMonth.parse(validade, fmtLong);
                ok = true;
            } catch (DateTimeParseException ex) {
                ok = false;
            }
        }
        if (!ok) {
            throw new PagamentoInvalidoException("Validade do cartão invalida - formato MM/yy ou MM/yyyy");
        }
        if (ym.isBefore(YearMonth.now())) {
            throw new PagamentoInvalidoException("Cartão expirado");
        }
        if (cvv == null || !cvv.matches("\\d{3,4}")) {
            throw new PagamentoInvalidoException("CVV invalido");
        }
    }

    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Pagamento com cartão concluído: titular=%s, valor=R$ %s%n", titular, valor.setScale(2));
    }

    private boolean isValido(String numero) {
        int soma = 0;
        boolean alternar = false;
        for (int i = numero.length() - 1; i >= 0; i--) {
            int n = Character.getNumericValue(numero.charAt(i));
            if (alternar){
                n *= 2;
                if (n > 9) n -= 9;
            }
            soma += n;
            alternar = !alternar;
        }
        return (soma % 10) == 0;
    }
}
