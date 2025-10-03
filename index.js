export class GeminiBot {
  constructor({ apiKey, model = "gemini-2.5-flash", systemPrompt = "" }) {
    this.apiKey = apiKey;
    this.model = model;
    this.systemPrompt = systemPrompt;
    this.history = [];
  }

  async send(message) {
    this.history.push({ role: "user", parts: [{ text: message }] });

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: this.systemPrompt
              ? { parts: [{ text: this.systemPrompt }] }
              : undefined,
            contents: this.history
          })
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "❌ No response from model.";

      this.history.push({ role: "model", parts: [{ text: reply }] });
      return reply;
    } catch (err) {
      console.error("❌ Error:", err);
      return "⚠️ Error occurred while fetching response.";
    }
  }

  setModel(newModel) {
    this.model = newModel;
  }

  setSystemPrompt(prompt) {
    this.systemPrompt = prompt;
  }

  getHistory() {
    return this.history.map(m => ({
      role: m.role,
      text: m.parts[0].text
    }));
  }

  clearHistory() {
    this.history = [];
  }
}
