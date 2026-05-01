import { validateLuhn } from '../utils/luhn';

export class CardService {
  public validate(cardNumber: string) {
    const isValid = validateLuhn(cardNumber);
    
    return {
      isValid,
      message: isValid ? 'Card number is valid.' : 'Card number is invalid.'
    };
  }
}