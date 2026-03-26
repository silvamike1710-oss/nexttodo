"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

export default function ClientWrapper({ tarefas }: any) {
  const [lista, setLista] = useState(tarefas);

  const count = useContadorDeTarefas(lista);

  const handleAdd = (titulo: string) => {
    const nova = {
      id: Date.now(),
      titulo,
    };

    setLista((prev: any) => [...prev, nova]);
  };

  return (
    <>
      <p>Total: {count}</p>

      <NovaTarefa onAdd={handleAdd} />

      <ul>
        {lista.map((t: any) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </>
  );
}