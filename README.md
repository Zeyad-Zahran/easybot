# GeminiBot

A **lightweight and easy-to-use wrapper** for Google Gemini models.  
Use this library to interact with Gemini models in your Node.js projects effortlessly.

---

## Installation

```bash
npm install gemibot
```

---

## Usage

### Import the library

If using ES Modules:

```js
import { GeminiBot } from "gemibot";
```

If using CommonJS:

```js
const { GeminiBot } = require("gemibot");
```

---

### Create a bot instance

```js
const bot = new GeminiBot({
  apiKey: "YOUR_GOOGLE_API_KEY", // Your Google API Key
  model: "gemini-2.5-flash",     // Optional, default is "gemini-2.5-flash"
  systemPrompt: "You are a helpful AI." // Optional system prompt
});
```

---

### Send a message

```js
async function run() {
  const reply = await bot.send("Write a poem about technology");
  console.log("🤖 Bot Reply:", reply);
}

run();
```

**Output Example:**

```
🤖 Bot Reply: O technology, pulse of our era, a light that shines and illuminates our nights...
```

---

### Change the model

```js
bot.setModel("gemini-1.5-flash");
```

---

### Set or update system prompt

```js
bot.setSystemPrompt("You are an AI assistant that writes poems.");
```

---

### Get conversation history

```js
const history = bot.getHistory();
console.log(history);
/*
[
  { role: "user", text: "Write a poem about technology" },
  { role: "model", text: "O technology, pulse of our era, a light that shines..." }
]
*/
```

---

### Clear conversation history

```js
bot.clearHistory();
```

---

## Features

- Lightweight wrapper for Google Gemini models.
- Supports multiple Gemini models (`gemini-2.5-flash`, `gemini-1.5-flash`, etc.).
- Stores conversation history.
- Allows system instructions for context.
- Easy to integrate with any Node.js project.

---

## Notes

- Make sure your API key has access to Google Generative AI.
- Works best with **ES modules** (`"type": "module"` in `package.json`).
- Handles errors gracefully and returns fallback messages.

---

## License

MIT License © Zeyad Zahran
