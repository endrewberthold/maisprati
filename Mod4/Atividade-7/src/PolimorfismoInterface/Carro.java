package PolimorfismoInterface;

public class Carro implements IMeioTransporte{
    private final String nome;
    private double velocidadeAtual;
    private final double delta = 10.0;

    public Carro(String nome){
        this.nome = nome;
        this.velocidadeAtual = 0;
    }

    @Override
    public void acelerar(){
        double velocidadeMaxima = 200.0;
        if (velocidadeAtual + delta > velocidadeMaxima){
            throw new VelocidadeMaximaException(String.format("%s: Velocidade maxima atingida: %f", nome, velocidadeMaxima));
        }
        velocidadeAtual += delta;
        System.out.printf("%s acelerou + %.1f km/h -> %.1f km/h", nome, delta, velocidadeAtual);
    }
    @Override
    public void frear(){
        if (velocidadeAtual -delta < 0.0){
            throw new VelocidadeInvalidaException(String.format("%s: veiculo parado (velocidade atual: %.1f)", nome, velocidadeAtual));
        }
        velocidadeAtual -= delta;
        System.out.printf("%s freou -%.1f km/h -> %.1f km/h", nome, delta, velocidadeAtual);
    }

    @Override
    public double getVelocidadeAtual(){
        return velocidadeAtual;
    }

    @Override
    public String getNome(){
        return nome;
    }
}
