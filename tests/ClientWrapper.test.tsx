import { render, screen, fireEvent } from "@testing-library/react";
import ClientWrapper from "@/components/ClientWrapper";

const tarefasMock = [
  { id: 1, titulo: "Estudar Next.js" },
  { id: 2, titulo: "Fazer exercícios" },
];

test("renders initial task list", () => {
  render(<ClientWrapper tarefas={tarefasMock} />);

  expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
  expect(screen.getByText("Fazer exercícios")).toBeInTheDocument();
});

test("shows correct initial count", () => {
  render(<ClientWrapper tarefas={tarefasMock} />);

  expect(screen.getByText("Total: 2")).toBeInTheDocument();
});

test("adds a new task and updates list + count", async () => {
  render(<ClientWrapper tarefas={tarefasMock} />);

  const input = screen.getByPlaceholderText("Nova tarefa");
  const button = screen.getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Nova tarefa teste" } });
  fireEvent.click(button);

  expect(await screen.findByText("Nova tarefa teste")).toBeInTheDocument();
  expect(screen.getByText("Total: 3")).toBeInTheDocument();
});