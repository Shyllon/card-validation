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


---

## 2. The Live Link: Do you need it?
Looking at your assessment requirements: **No, it is not explicitly required.**

The prompt says:
> "Push your work to a public GitHub repository and share the link with your supervisor."

### Why you might NOT want to host it:
The assessment emphasizes the **Live Review**. During this review, they will ask you to:
1. Walk through the code on **your machine**.
2. Make a **live modification** on the spot.

If you host it on Vercel or Render, you're just showing them a working URL. But they want to see the code and your ability to change it in real-time. 

### Recommendation:
*   **Focus on the Local Setup:** Make sure that when the supervisor clones your repo and runs `npm install` and `npm run dev`, it works perfectly on the first try.
*   **Optional hosting:** If you *really* want to go the extra mile, you can use **Render** (easier for Express/Node than Vercel), but only do this if your GitHub repo is 100% solid first. 

---

## Final Steps to Finish
1.  **Create the README.md** using the template above.
2.  **Git Push:**
    ```powershell
    git add README.md
    git commit -m "docs: add comprehensive README with design decisions"
    git push origin main
    ```
3.  **The "Clean Machine" Test:** Delete your `node_modules` folder locally, then run `npm install` and `npm test`. If it passes, you are 100% safe to submit.

**How are you feeling about the "Live Modification" part of the review? Do you want to try