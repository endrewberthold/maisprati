package PolimorfismoInterface;

import java.util.ArrayList;
import java.util.List;

public class MainTransporte {
    public static void main(String[] args) {
        List<IMeioTransporte> frota = new ArrayList<>();

        frota.add(new Carro("Monza"));
        frota.add(new Bicicleta("Barra Forte"));
        frota.add(new Trem("Trem-Bala"));

        System.out.println(" --- Ciclo 1: Acelerar veiculo ---");
        for (IMeioTransporte t : frota) {
            try {
                t.acelerar();
            } catch (RuntimeException e) {
                System.out.printf("Erro ao acelerar %s: %s%n", t.getNome(), e.getMessage());
            }
        }

        System.out.println("\n--- Ciclo 2: Acelerar novamente ---");
        for (IMeioTransporte t : frota) {
            try {
                t.acelerar();
            } catch (RuntimeException e) {
                System.out.printf("Erro ao acelerar %s: %s%n", t.getNome(), e.getMessage());
            }
        }

        System.out.println("\n--- Ciclo 3: Frear cada veiculo ---");
        for (IMeioTransporte t : frota) {
            try {
                t.frear();
            } catch (RuntimeException e) {
                System.out.printf("Erro ao frear %s: %s%n", t.getNome(), e.getMessage());
            }
        }

        System.out.println("\n--- Ciclo 4: Forçar erro - Frear veiculo parado ---");
        IMeioTransporte bike = new Bicicleta("Caloi");
        try {
            bike.acelerar();
            bike.frear();
            bike.frear();
        } catch (RuntimeException e) {
            System.out.printf("\nOperação inválida em %s: %s%n", bike.getNome(), e.getMessage());
        }

        System.out.println("\n--- Estado final ---");
        for (IMeioTransporte t : frota) {
            System.out.printf("%s -> %.1f km/h", t.getNome(), t.getVelocidadeAtual());
        }
    }
}

