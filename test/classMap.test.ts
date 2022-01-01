import { describe, it } from 'mocha';
import { expect } from 'chai';
import { classMap } from '../classmap-util';

describe('Running classMap tests', () => {
  it('should be able to work with simple arrays', () => {
    const classList = classMap(['a', 'b', 'c']);
    expect(classList).to.equal('a b c');
  });

  it('should be able to work with functions in array', () => {
    const classList = classMap(['a', () => 'b', () => 'c', () => false, () => null, 'd']);
    expect(classList).to.equal('a b c d');
  });

  it('should be able to work with classMap objects', () => {
    const classList = classMap({
      a: true,
      d: false,
      b: 1,
      c: 'true',
      e: 0,
      f: () => true,
      g: () => false,
      k: () => 'just string'
    });

    expect(classList).to.equal('a b c f k');
  });
});
