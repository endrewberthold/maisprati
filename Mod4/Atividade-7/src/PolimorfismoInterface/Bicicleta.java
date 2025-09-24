package PolimorfismoInterface;

public class Bicicleta implements IMeioTransporte{
    private final String nome;
    private double velocidadeAtual;
    private final double delta = 5.0;

    public Bicicleta(String nome){
        this.nome = nome;
        this.velocidadeAtual = 0;
    }

    @Override
    public void acelerar(){
        double velocidadeMaxima = 50.0;
        if (velocidadeAtual + delta > velocidadeMaxima){
            throw new VelocidadeMaximaException(String.format("\n%s: Velocidade maxima atingida: %f", nome, velocidadeMaxima));
        }
        velocidadeAtual += delta;
        System.out.printf("\n%s acelerou %.1f km/h -> %.1f km/h", nome, delta, velocidadeAtual);
    }
    @Override
    public void frear(){
        if (velocidadeAtual - delta < 0.0){
        throw new VelocidadeInvalidaException(String.format("\n%s: veiculo (velocidade atual %.1f) ", nome, velocidadeAtual));
        }
        velocidadeAtual -= delta;
        System.out.printf("\n%s freou -%.1f km/h -> %.1f km/h", nome, delta, velocidadeAtual);
    }

    @Override
    public double getVelocidadeAtual() {
        return velocidadeAtual;
    }

    @Override
    public String getNome() {
        return nome;
    }
}
