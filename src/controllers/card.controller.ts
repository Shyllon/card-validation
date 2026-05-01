import { Request, Response } from 'express';
import { CardService } from '../services/card.service';

const cardService = new CardService();

export const validateCard = (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  
  const result = cardService.validate(cardNumber);
  
  // We return 200 because the request was successfully processed,
  // regardless of whether the card itself is valid.
  return res.status(200).json({
    success: true,
    ...result
  });
};