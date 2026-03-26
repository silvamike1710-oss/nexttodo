"use client";

import { useState } from "react";

interface Props {
  onAdd: (titulo: string) => void;
}

export default function NovaTarefa({ onAdd }: Props) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim()) {
      setErro("Digite uma tarefa");
      return;
    }

    onAdd(titulo);
    setTitulo("");
    setErro("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>

      {erro && <p>{erro}</p>}
    </form>
  );
}