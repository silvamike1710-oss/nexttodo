import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("shows error when submitting empty input", () => {
  render(<NovaTarefa onAdd={jest.fn()} />);

  fireEvent.click(screen.getByText("Adicionar"));

  expect(screen.getByText("Digite uma tarefa")).toBeInTheDocument();
});

test("clears input after successful submit", () => {
  const mockAdd = jest.fn();

  render(<NovaTarefa onAdd={mockAdd} />);

  const input = screen.getByPlaceholderText("Nova tarefa");

  fireEvent.change(input, { target: { value: "Teste" } });
  fireEvent.click(screen.getByText("Adicionar"));

  expect(mockAdd).toHaveBeenCalledWith("Teste");
  expect(input).toHaveValue("");
});

test("removes error after valid input", () => {
  render(<NovaTarefa onAdd={jest.fn()} />);

  const input = screen.getByPlaceholderText("Nova tarefa");

  fireEvent.click(screen.getByText("Adicionar"));
  expect(screen.getByText("Digite uma tarefa")).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Ok" } });
  fireEvent.click(screen.getByText("Adicionar"));

  expect(screen.queryByText("Digite uma tarefa")).not.toBeInTheDocument();
});