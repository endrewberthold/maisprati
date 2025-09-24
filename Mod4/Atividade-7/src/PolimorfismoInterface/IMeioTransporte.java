package PolimorfismoInterface;

public interface IMeioTransporte {
    /**
     * Aumenta a velocidade do veiculo conforme sua lógica
     *
     * @throws: VelocidadeMaximaException se não for possivel acelerar alem do maximo
     * */
    void acelerar() throws VelocidadeMaximaException;

    /**
     * Diminui a velocidade do veiculo conforme sua lógica
     *
     * @throws: VelocidadeInvalidaException se não for possivel frear, valida se ja esta parado
     * */
    void frear() throws VelocidadeInvalidaException;

    /**
     * Retorna velocidade atual
     * **/
    double getVelocidadeAtual();

    /**
     * Getter nome do veiculo
     * **/
    String getNome();
}
