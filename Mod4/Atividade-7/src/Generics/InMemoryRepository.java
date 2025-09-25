package Generics;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {

    private final Map<ID, T> armazenamento = new ConcurrentHashMap<>();

    @Override
    public T salvar(T entidade) {
        if (entidade == null) {
            throw new IllegalArgumentException("Entidade não pode ser nula.");
        }
        ID id = entidade.getId();
        if (id == null) {
            throw new IllegalArgumentException("ID da entidade não pode ser nulo.");
        }
        armazenamento.put(id, entidade);
        return entidade;
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        if (id == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(armazenamento.get(id));
    }

    @Override
    public List<T> listarTodos() {
        // devolve cópia imutável da coleção
        List<T> copia = armazenamento.values()
                .stream()
                .collect(Collectors.toList());
        return Collections.unmodifiableList(copia);
    }

    @Override
    public void remover(ID id) {
        if (id == null) {
            throw new EntidadeNaoEncontradaException("ID não pode ser nulo.");
        }
        T removed = armazenamento.remove(id);
        if (removed == null) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada para remoção.");
        }
    }
}
