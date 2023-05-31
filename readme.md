# GPTChess

## Description

GPTChess is an npm package that provides a chess AI powered by the OpenAI GPT-3 model. It allows you to generate AI moves based on the current chessboard state.

## Installation

To use this package in your project, you need to have Node.js installed. You can install the package using npm:

```
npm install gptchess
```

## Usage

To use the chess AI, import it into your JavaScript file:

```javascript
const Client = require("gptchess");

// Create an instance of the chess AI
const OPENAI_API_KEY = "your-openai-api-key";
const chessAI = new Client(OPENAI_API_KEY);

// Get the AI move based on the current chessboard state
// max_tokens is optional
async function getAIMove(chessboard, Turn, max_tokens) {
    if (!Turn) Turn = "White";
    try {
        const move = await chessAI.getMove(chessboard, Turn, max_tokens);
        console.log(move.move);
    } catch (error) {
        console.error(error);
    }
}

getAIMove("rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR");
```

Replace `"your-openai-api-key"` with your actual OpenAI API key. If no API key is provided or if it is invalid, an error will be thrown.

The `getMove` method sends a request to the OpenAI GPT-3 model with the specified chessboard state and retrieves the AI's suggested move. The move is returned as a JSON object containing the move and a description.

## Error Handling

If there is an error during the AI move generation process, it will be propagated as an exception. Make sure to handle errors appropriately in your code.

## Repository

The source code for this package is hosted on [GitHub](https://github.com/Alex-724/gptchess). You can submit bug reports or contribute to the project on the [issues page](https://github.com/Alex-724/gptchess/issues).

## License

This package is licensed under the ISC License.