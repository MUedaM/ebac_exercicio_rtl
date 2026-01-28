import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve ser adicionado 2 comentarios", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Primeiro comentario adicionado automaticamente",
      },
    });
    fireEvent.click(screen.getByTestId("comentario-postar-button"));

    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Segundo comentario adicionado automaticamente",
      },
    });
    fireEvent.click(screen.getByTestId("comentario-postar-button"));

    expect(screen.getAllByTestId("comentario-list")).toHaveLength(2);
  });
});
