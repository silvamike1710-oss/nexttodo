import { getTarefas } from "@/lib/tarefas";
import ClientWrapper from "@/components/ClientWrapper";

export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <ClientWrapper tarefas={tarefas} />
    </main>
  );
}