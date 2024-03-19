import { fireEvent, render, screen } from "@testing-library/react";
import ProductComponent from "@/components/createProduct/receta";
import { prettyDOM } from "@testing-library/dom";

const categorias = [
  { id: 1, name: "Postres" },
  { id: 2, name: "Platos principales" },
  { id: 3, name: "Entrantes" },
];

describe("<ProductComponent/>", () => {
  test('la caja con el texto se encuentra en el documento', () => {
    const onSubmit = jest.fn();
    render(<ProductComponent onSubmit={onSubmit} categorias={categorias} />);

    const article = screen.getByText('¡Creá tu receta!');
    expect(article).toBeInTheDocument()
  });

  test('la caja con el texto tiene un color inicial', () => {
    const onSubmit = jest.fn();
    render(<ProductComponent onSubmit={onSubmit} categorias={categorias} />);
    const article = screen.getByText('¡Creá tu receta!');

    expect(article).toHaveStyle({ backgroundColor: 'green', })
  });


  test("verificamos tipos inputs", () => {
    const onSubmit = jest.fn();
    render(<ProductComponent onSubmit={onSubmit} categorias={categorias} />);

    const input = document.querySelector('input[name="titulo"]');

    expect(input).toHaveAttribute("type", "text");
  });

  test("Que tipo de elemento nos da este componente", () => {
    const onSubmit = jest.fn();
    render(<ProductComponent onSubmit={onSubmit} categorias={categorias} />);

    fireEvent.submit(screen.getByText("Enviar"));
    
    expect(onSubmit).toHaveBeenCalledTimes(1)
  });

  test("verificamos envio datos", () => {
    const onSubmit = jest.fn();
    render(<ProductComponent onSubmit={onSubmit} categorias={categorias} />);

    const inputTitulo = document.querySelector('input[name="titulo"]') as HTMLInputElement;
    const inputDescripcion = document.querySelector('input[name="descripcion"]') as HTMLInputElement;


    if (inputTitulo && inputDescripcion) {
      fireEvent.change(inputTitulo, { target: { value: "Fideos" } });
      fireEvent.change(inputDescripcion, { target: { value: "con salsa" } });
      fireEvent.submit(screen.getByText("Enviar"));

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(inputTitulo.value).toBe("Fideos");
      expect(inputDescripcion.value).toBe("con salsa");
    }
  });
});
