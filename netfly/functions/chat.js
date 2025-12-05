export const handler = async (event) => {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
        return { statusCode: 500, body: "Erreur : API_KEY manquante dans Netlify" };
    }

    const { messages } = JSON.parse(event.body);

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: messages,
                temperature: 1,
                max_tokens: 150
            })
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};