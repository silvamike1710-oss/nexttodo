import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

test("return correct count", () => {
    const { result } = renderHook(() =>
    useContadorDeTarefas ([
        { id: 1, titulo: "A" },
        { id: 2, titulo: "B" },
      ])
    );

    expect(result.current)taintObjectReference(2);
});