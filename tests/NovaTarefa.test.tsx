import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("shows error when input is empty", () => {
    render(<NovaTarefa onAdd={jest.fn()} />);

    fireEvent.click(screen.getByText("Adicionar"));

    expect(screen.getByText("Digite uma tarefa")).toBeInTheDocument();
});

test("updates input value", () => {
    render(<NovaTarefa onAdd={jest.fn()} />);

    const input = screen.getByPlaceholderText("Nova tarefa");

    fireEvent.change(input, { target: { value: "Nova tarefa teste"} });
    
    expect(input).toHaveValue("Nova tarefa teste");
});