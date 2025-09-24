package Abstracao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MainPagamento {
    public static void main(String[] args) {
        List<FormaPagamento> formas = new ArrayList<>();

        formas.add(new CartaoCredito("4539148803436467", "João Silva", "12/25", "123"));
        formas.add(new Boleto("23793381286000000000000000000000000000000000000"));
        formas.add(new Pix("usuario@provedor.com"));
        formas.add(new Pix("+5551995486650"));
        formas.add(new Pix("550e8400-e29b-41d4-a716-446655440000"));
        formas.add(new CartaoCredito("1234567890123456", "Márcia", "01/23", "12A"));

        BigDecimal valor = new BigDecimal("150.75");

        for (FormaPagamento f : formas) {
            System.out.println("Processando com: " + f.getClass().getSimpleName());
            try {
                f.processarPagamento(valor);
                System.out.println("Status: SUCESSO\n");
            } catch (PagamentoInvalidoException e) {
                System.out.println("Status: FALHOU -> " + e.getMessage() + "\n");
            }
        }
    }
}
