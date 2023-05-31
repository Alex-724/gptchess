const { Configuration, OpenAIApi } = require("openai");

class Client {
    constructor(OPENAI_API_KEY) {
        this.OPENAI_API_KEY = OPENAI_API_KEY;
        if (!this.OPENAI_API_KEY) throw new Error('No OPENAI_API_KEY provided');
        const configuration = new Configuration({ apiKey: this.OPENAI_API_KEY });
        this.openAi = new OpenAIApi(configuration);
        this.prompt = `Given the chessboard state: {{chessboard}},Turn: {{Turn}}, suggest the next move.\nRule: return base on '{ "move" : "<The move>", "des": "<Why this move>" }'`
    }
    async getMove(Board, Turn, max_tokens) {
        if (!Board) throw new Error('No Board provided');
        if (!Turn) Turn = "White";
        const prompt = this.prompt.replace('{{chessboard}}', `"${Board}"`).replace('{{Turn}}', `"${Turn}"`)
        let data = await this.ask(prompt, max_tokens)
        return JSON.parse(data);
    }

    async ask(prompt, max_tokens) {
        if (!max_tokens) max_tokens = 100
        const completion = await this.openAi
          .createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: max_tokens,
            n: 1,
            temperature: 0.7,
          })
          .catch((err) => {
            console.log(err.data);
            return err
          });
        if (!completion) throw new Error("ERROR on openai gpt");
        if (!completion.data.choices) throw new Error("ERROR on openai gpt");
        return completion.data.choices[0].text.trim();
      }
}

module.exports = Client;