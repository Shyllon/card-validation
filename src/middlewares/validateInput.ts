import { Request, Response, NextFunction } from 'express';

export const validateCardInput = (req: Request, res: Response, next: NextFunction) => {
  const { cardNumber } = req.body;

  // Check if field exists and is a string
  if (typeof cardNumber !== 'string') {
    return res.status(400).json({
      success: false,
      message: "cardNumber is required and must be a string."
    });
  }

  // Check if it contains digits
  if (!/\d/.test(cardNumber)) {
    return res.status(400).json({
      success: false,
      message: "cardNumber must contain at least one digit."
    });
  }

  next();
};