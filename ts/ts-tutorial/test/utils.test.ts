import { calculateProfits } from '../src/helpers/utils';

describe('calculateProfits', () => {
  it('should exclude commission(400000)', () => {
    expect(calculateProfits(400000)).toBe(320000);
  });

  it('should exclude commission(950000)', () => {
    expect(calculateProfits(950000)).toBe(805000);
  });

  it('should exclude commission(2000000)', () => {
    expect(calculateProfits(2000000)).toBe(1800000);
  });

  it('should exclude commission(5000000)', () => {
    expect(calculateProfits(5000000)).toBe(4650000);
  });
});
