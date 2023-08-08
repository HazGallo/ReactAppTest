import { render, screen } from '@testing-library/react';
import { ButtonIco, Props } from '../../components/ButtonIco/index';
import { vitest } from 'vitest';
import { TypesSize } from '../../components/Button/types/buttonTypes';

describe('ButtonIco', () => {
  test('debe renderizar el componente correctamente', () => {
    const props: Props = {
      sizeName: 'md',
      isDisabled: false,
      warning: false,
      typeIcon: 'IconGhost',
      'aria-label': 'buttonIco',
      backgroundType: 'backgroundDefault',
    };

    render(<ButtonIco {...props} />);

    const buttonIco = screen.getByLabelText('buttonIco');
    expect(buttonIco).toBeTruthy(); // Verifica si el elemento está presente en el DOM
  });

  test('debe ejecutar la función onClick al hacer clic en el botón', () => {
    const onClickMock = vitest.fn();
    const props: Props = {
      sizeName: 'md',
      isDisabled: false,
      warning: false,
      typeIcon: 'IconGhost',
      'aria-label': 'buttonIco',
      backgroundType: 'backgroundDefault',
      onClick: onClickMock,
    };

    render(<ButtonIco {...props} />);

    const buttonIco = screen.getByLabelText('buttonIco');
    buttonIco.click();

    expect(onClickMock.mock.calls.length).toBe(1); // Verifica si la función fue llamada una vez
  });

  test('debe aplicar el estilo de borde correcto según el tamaño', () => {
    const props: Props = {
      sizeName: 'sm',
      isDisabled: false,
      warning: false,
      typeIcon: 'IconGhost',
      'aria-label': 'buttonIco',
      backgroundType: 'backgroundDefault',
    };

    render(<ButtonIco {...props} />);

    const buttonIco = screen.getByLabelText('buttonIco');
    const buttonIcoStyles = window.getComputedStyle(buttonIco);

    expect(buttonIcoStyles.border).to.equal('1px'); // Verifica el estilo de borde para el tamaño 'sm'
  });

  // test('debe tener estilos diferentes cuando está deshabilitado', () => {
  //   const props: Props = {
  //     sizeName: 'md',
  //     isDisabled: true,
  //     'aria-label': 'buttonIco',
  //   };

  //   render(<ButtonIco {...props} />);

  //   const buttonIco = screen.getByLabelText('buttonIco') as HTMLElement;
  //   const computedStyles = window.getComputedStyle(buttonIco);

  //   console.log(computedStyles);

  //   expect(computedStyles.color).toBe('bgGreyIcon');
  //   expect(computedStyles.background).toBe('whiteAlpha.200');
  //   expect(computedStyles.cursor).toBe('not-allowed');
  // });

  // test('Verificamos los tamaños correspondiente', () => {
  //   const props: Props = {
  //     sizeName: 'md',
  //     isDisabled: true,
  //     'aria-label': 'buttonIco',
  //   };
  //   render(<ButtonIco {...props} />);

  //   const x = TypesSize.find((x) => x.sizeName === 'md');
  //   const buttonElement = screen.getByRole('button');

  //   expect(buttonElement.style.height).toBe(x?.background);
  //   expect(buttonElement.style.width).toBe(x?.background);
  //   // Agrega más aserciones de estilos según tus necesidades
  // });

  // Agrega más pruebas según sea necesario...
});
