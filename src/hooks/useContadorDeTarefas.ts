import { useMemo } from "react";
import { Tarefa } from "@/types/tarefa";

export function useContadorDeTarefas(tarefas?: Tarefa[]) {
  return useMemo(() => tarefas?.length ?? 0, [tarefas]);
}