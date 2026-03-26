"use client";
import { getTarefas } from "@/lib/tarefas";
import NovaTarefa from "@/components/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

export default async function Page() {
  const tarefas = await getTarefas();
  
  return (
    <main>
      <h1>Lista de Tarefas</h1>

       {/*the hookthing*/}
       <ClientWrapper tarefas={tarefas}/>
    </main>
  );
}

function ClientWrapper({ tarefas }: any) {
  
  const [lista, setLista] = require("react").useState(tarefas);
  const count = useContadorDeTarefas(lista);

  const reload = async () => {
    const { getTarefas } = await import("@/lib/tarefas");
    const novas = await getTarefas();
    setLista(novas);
  };

  return (
    <>
    <p>Total: {count}</p>
    <NovaTarefa onAdd={reload} />

    <ul>
      {lista.map((t: any) =>(
        <li key={t.id}>{t.titulo}</li>
      ))}
    </ul>
    
    </>
  );
}
