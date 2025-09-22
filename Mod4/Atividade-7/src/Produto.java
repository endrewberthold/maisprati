public class Produto {

    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    //Getter do nome
    public String getNome() {
        return nome;
    }
    //Setter do nome, neste bloco é implementado
    // a lógica de verificação se o nome é válido
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio");
        }
        this.nome = nome.trim();
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        if (preco < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo");
        }
        this.preco = preco;
    }
    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }
    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("Quantidade em estoque não pode ser negativo");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    /**
     * Aplica um desconto ao preço do produto
     *
     * @param: porcentagem número entre 0 e 50. Ex.: 10 = 10%.
     * @throws: DescontoInvalidoException se porcentager estiver fora do intervalo de 0 a 50
     **/

    public void aplicarDesconto(double porcentagem){
        if (Double.isNaN(porcentagem) || porcentagem < 0 || porcentagem > 50) {
            throw new DescontoInvalidoException("Porcentagem inválida. Deve estar entre 0 e 50");
        }

        double fator = 1 - (porcentagem / 100.0);
        double novoPreco = this.preco * fator;

        novoPreco = Math.round(novoPreco * 100.0) / 100.0;

        setPreco(novoPreco);
    }

    @Override
    public String toString() {
        return String.format("Produto {nome='%s', preco=%.2f, quantidadeEmEstoque=%d}", nome, preco, quantidadeEmEstoque);
    }

    /**
     * Method main para demonstrar uso da classe
     */
    public static void main(String[] args) {
        System.out.println("----- Criação do produto válido -----");

        Produto produto = new Produto("PS5", 2350.00, 10);
        System.out.println(produto);

        produto.aplicarDesconto(10);
        System.out.println("Desconto de 10% aplicado: " + produto);

        System.out.println("\n----- Atualização de valores válidos -----");
        produto.setPreco(2500.00);
        produto.setQuantidadeEmEstoque(5);
        System.out.println("Valor após atualização" + produto);

        System.out.println("\n----- Tentativas inválidas -----");

        Produto produto2 = new Produto("Teclado", 300.00, 10);
        System.out.println("\nAntes (produto2): " + produto2);

        try {
            produto2.aplicarDesconto(-5);
        } catch (DescontoInvalidoException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }

        //Nome inválido
        try {
            produto.setNome("");
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao alterar o nome: " + e.getMessage());
        }

        //Preço negativo
        try {
            produto.setPreco(-1.0);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao alterar preço: " + e.getMessage());
        }

        //Quantidade negativa
        try {
            produto.setQuantidadeEmEstoque(-1);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao alterar quantidade: " + e.getMessage());
        }

        System.out.println("\n----- Tentativa e criar produto inválido no construtor -----");
        try {
            Produto invalido = new Produto(null, -2.50, -100);
            System.out.println(invalido);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }
    }
}
