"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";
import { addTarefa } from "@/lib/tarefas";
import { Tarefa } from "@/types/tarefa";

export default function ClientWrapper({ tarefas }: { tarefas: Tarefa[] }) {
  const [lista, setLista] = useState<Tarefa[]>(tarefas);

  const count = useContadorDeTarefas(lista);

  const handleAdd = async (titulo: string) => {
    const nova = await addTarefa(titulo);
    setLista((prev) => [...prev, nova]);
  };

  return ( // ← THIS must exist
    <>
      <p>Total: {count}</p>

      <NovaTarefa onAdd={handleAdd} />

      <ul>
        {lista.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </>
  );
}