package Generics;

import java.util.List;
import java.util.Optional;

public interface IRepository<T extends Identificavel<ID>, ID> {

    /**
     * Salva uma entidade. Se já existir com mesmo ID, substitui.
     * Retorna a entidade salva.
     */
    T salvar(T entidade);

    /**
     * Busca uma entidade por ID. Retorna Optional vazio se não existir.
     */
    Optional<T> buscarPorId(ID id);

    /**
     * Retorna lista de todas as entidades salvas.
     */
    List<T> listarTodos();

    /**
     * Remove entidade com o ID dado. Se não existir, lança EntidadeNaoEncontradaException.
     */
    void remover(ID id) throws EntidadeNaoEncontradaException;
}
