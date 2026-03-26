import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("renders page title", async () => {
  const PageComponent = await Page();
  render(PageComponent);

  expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
});