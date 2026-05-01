/**
 * Validates a card number using the Luhn Algorithm (Mod 10)
 * This is the industry standard for payment card validation.
 */
export const validateLuhn = (cardNumber: string): boolean => {
  // 1. Remove non-digits (handles spaces or dashes from the user)
  const sanitized = cardNumber.replace(/\D/g, '');

  // 2. Defense: Check if empty or contains nothing but non-digits
  if (!sanitized) return false;

  let sum = 0;
  let shouldDouble = false;

  // 3. Iterate from right to left
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      // If doubling results in a number > 9, subtract 9 
      // (This is the same as adding the two digits: 12 -> 1+2 = 3; 12-9 = 3)
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // 4. Valid if sum is a multiple of 10
  return sum % 10 === 0;
};