package Abstracao;

import java.math.BigDecimal;

public abstract class FormaPagamento {

    /**
     * Valida os dados especificos da forma de pagamento
     * Lança PagamentoInvalidoException se algum valor invalido for detectado
     */
    protected abstract void validarPagamento() throws PagamentoInvalidoException;

    /**
     * Executa a operação concreta de pagamento
     * sucesso/impressao/integração
     */
    protected abstract void executarPagamento(BigDecimal valor) throws PagamentoInvalidoException;

    /**
     * Method template: valida primeiro e depois executa
     * Utilizado final para que todas as subclasses respeitem a ordem validar > executar
     */
    public final void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("Valor do pagamento deve ser maior que zero (0)");
        }

        //Validar dados da forma de pagamento
        validarPagamento();

        //Executar o pagamento
        executarPagamento(valor);
    }
}
