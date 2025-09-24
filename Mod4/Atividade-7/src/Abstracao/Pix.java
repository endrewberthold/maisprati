package Abstracao;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.regex.Pattern;

public class Pix extends FormaPagamento {
    private final String chave;

    public Pix(String chave) {
        this.chave = chave != null ? chave.trim() : null;
    }

    @Override
    protected void validarPagamento() throws PagamentoInvalidoException {
        if (chave == null || chave.isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix não pode ser vazia");
        }
        if (isEmail(chave) || isTel(chave) || isUUID(chave)) {
            return;
        }
        throw new PagamentoInvalidoException(("Chave Pix em formato inválido. Aceito: email, telefone, UUID"));
    }

    @Override
    protected void executarPagamento(BigDecimal valor) {
        System.out.printf("Pix realizado: chave=%s, valor=R$ %s%n", chave, valor.setScale(2));
    }

    private boolean isEmail(String v) {
        String emailRegex = "^[\\w-.]+@[\\w-]+(\\.[\\w-]+)+$";
        return Pattern.matches(emailRegex, v);
    }

    private boolean isTel(String v) {
        return v.startsWith("+") && v.substring(1).matches("\\d{8,15}");
    }

    private boolean isUUID(String v) {
        try {
            UUID.fromString(v);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }
}
