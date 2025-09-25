package Imutabilidade;

import java.math.BigDecimal;
import java.math.RoundingMode;

public record Dinheiro(BigDecimal valor, Moeda moeda) {
    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor monetário não pode ser negativo.");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula.");
        }

        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public Dinheiro mais(Dinheiro outro) {
        validarMesmaMoeda(outro);
        return new Dinheiro(this.valor.add(outro.valor), moeda);
    }

    public Dinheiro multiplicar(BigDecimal fator) {
        if (fator == null || fator.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Fator não pode ser negativo.");
        }
        return new Dinheiro(this.valor.multiply(fator), moeda);
    }

    private void validarMesmaMoeda(Dinheiro outro) {
        if (!this.moeda.equals(outro.moeda)) {
            throw new IllegalArgumentException("Moedas diferentes não podem ser somadas.");
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro(BigDecimal valor1, Moeda moeda1))) return false;
        return valor.compareTo(valor1) == 0 && moeda == moeda1;
    }

    @Override
    public String toString() {
        return moeda.getSimbolo() + " " + valor;
    }
}
