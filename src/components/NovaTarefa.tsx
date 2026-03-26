"use client";

import { useState } from "react";
import { addTarefa } from "@/lib/tarefas";

interface Props {
    onAdd: () => void;
}

export default function NovaTarefa({ onAdd }: Props) {
    const [titulo, setTitulo] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!titulo.trim()) {
            setErro("Digite uma tarefa");
            return;
        }
        await addTarefa(titulo);
        setTitulo("");
        setErro("");
        onAdd();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Nova tarefa"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            />
            <button type="submit">Adicionar</button>

            {erro && <p>{erro}</p>}
        </form>
    );
}