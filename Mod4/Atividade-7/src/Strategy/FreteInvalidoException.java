package Strategy;

import java.math.BigDecimal;
import java.util.Objects;

/** Exceção para indicar que não é possível calcular frete para este pedido. */
public class FreteInvalidoException extends Exception {
    public FreteInvalidoException(String message) {
        super(message);
    }
}

