import { validateLuhn } from '../src/utils/luhn';

describe('Luhn Algorithm Utility', () => {
  it('should return true for a valid card number', () => {
    // A known valid number (Luhn-compliant)
    const validCard = '79927398713';
    expect(validateLuhn(validCard)).toBe(true);
  });

  it('should return false for an invalid card number', () => {
    const invalidCard = '79927398710';
    expect(validateLuhn(invalidCard)).toBe(false);
  });

  it('should handle card numbers with spaces or dashes', () => {
    const cardWithSpaces = '7992 7398 713';
    expect(validateLuhn(cardWithSpaces)).toBe(true);
  });

  it('should return false for empty or non-numeric strings', () => {
    expect(validateLuhn('')).toBe(false);
    expect(validateLuhn('abc')).toBe(false);
  });
});