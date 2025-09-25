package Strategy;

import java.math.BigDecimal;
import java.util.Objects;

public class Pedido {
    private BigDecimal valorTotal;
    private String cepDestino;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(BigDecimal valorTotal, String cepDestino, CalculadoraFrete estrategiaFrete) {
        if (valorTotal == null || valorTotal.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor total inválido.");
        }
        Objects.requireNonNull(cepDestino, "CEP destino não pode ser nulo.");
        if (!cepDestino.matches("\\d{5}-?\\d{3}")) {
            throw new IllegalArgumentException("CEP formato inválido: " + cepDestino);
        }
        this.valorTotal = valorTotal;
        this.cepDestino = cepDestino.replaceAll("-", "");
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() throws FreteInvalidoException {
        if (estrategiaFrete == null) {
            throw new IllegalStateException("Estratégia de frete não definida.");
        }
        return estrategiaFrete.calcular(this);
    }
}

