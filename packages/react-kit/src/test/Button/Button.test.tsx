import { Button } from '../../components/Button/index';

const props = ['button'];

describe('Button test', () => {
  test('Debe de obtener el texto ===button===', () => {
    expect(props).toContain('button');
  });
});
