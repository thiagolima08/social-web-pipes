import { Telefone } from './telefone.pipe';

describe('Telefone.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Telefone();
    expect(pipe).toBeTruthy();
  });
});
