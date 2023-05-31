const GPTchess = require('./index.js'); // replace with 'gptchess' if you installed it from npm

const gptchess = new GPTchess('OPENAI_API_KEY'); // replace OPENAI_API_KEY with your openai api key
// Get the AI move based on the current chessboard state
// max_tokens is optional
async function getAIMove(chessboard, Turn, max_tokens) {
    try {
        const move = await gptchess.getMove(chessboard, Turn, max_tokens);
        console.log(move);
    } catch (error) {
        console.error(error);
    }
}

getAIMove("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", "White", 100);
