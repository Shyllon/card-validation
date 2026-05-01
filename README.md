# Card Validation API

A robust, production-ready API built with Node.js and TypeScript to validate card numbers using the industry-standard Luhn Algorithm.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shyllon/card-validation.git

   npm install

   Running the App
Development mode: npm run dev

Production build: npm run build

Run tests: npm test

API Reference
Validate Card Number
Endpoint: POST /api/validate

Request Body:

JSON
{
  "cardNumber": "79927398713"
}
Responses:

200 OK: Validation successful (returns isValid: true or false).

400 Bad Request: Missing or malformed input.

Design Decisions
Framework (Express over NestJS): I chose Express to demonstrate my ability to architect a project from scratch with minimal boilerplate. This allowed for full transparency and control over the request lifecycle, which is essential for a clean live code review.

Algorithm (Luhn): I implemented the Luhn Algorithm (Mod 10) as it is the global standard for payment card validation. It effectively identifies accidental errors like single-digit typos or transpositions.

Architecture: I followed a modular Service-Controller-Utility pattern. This ensures that the validation logic (Utility) and business orchestration (Service) are decoupled from the HTTP delivery layer (Controller), making the system highly testable and maintainable.

Error Handling: I implemented a custom middleware to sanitize inputs (stripping spaces/dashes) and ensure that only valid string inputs reach the core logic, satisfying the "Graceful handling" requirement.

Assumptions
The API validates mathematical correctness via checksum. It does not verify the card's active status or bank balance.

Non-numeric characters in the input are ignored rather than rejected to improve the user experience.
