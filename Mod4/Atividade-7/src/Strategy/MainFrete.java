package Strategy;

import java.math.BigDecimal;

public class MainFrete {
    public static void main(String[] args) {
        try {
            Pedido pedido = new Pedido(new BigDecimal("300.00"), "90010-123", new FreteSedex());
            System.out.println("Valor do pedido: R$ " + pedido.getValorTotal());
            System.out.println("Estratégia: Sedex → Frete = " + pedido.calcularFrete());

            pedido.setEstrategiaFrete(new FretePac());
            System.out.println("Estratégia: PAC → Frete = " + pedido.calcularFrete());

            pedido.setEstrategiaFrete(new FreteRetiradaNaLoja());
            System.out.println("Estratégia: Retirada Na Loja → Frete = " + pedido.calcularFrete());

            CalculadoraFrete promo = FretePromocional.freteGratisAcimaDe(
                    new BigDecimal("200.00"), new FreteSedex());
            pedido.setEstrategiaFrete(promo);
            System.out.println("Estratégia: Promo (frete grátis ≥ 200) → Frete = " + pedido.calcularFrete());

            Pedido pedido2 = new Pedido(new BigDecimal("100.00"), "90020-456", promo);
            System.out.println("Pedido menor valor (100) → Frete promocional = " + pedido2.calcularFrete());

            Pedido pedido3 = new Pedido(new BigDecimal("150.00"), "12345-678", new FreteSedex());
            System.out.println("Tentando CEP inválido → ");
            System.out.println(pedido3.calcularFrete());

        } catch (FreteInvalidoException | IllegalArgumentException e) {
            System.err.println("Erro ao calcular frete: " + e.getMessage());
        }
    }
}
