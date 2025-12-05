export const handler = async (event) => {
    const API_KEY = process.env.API_KEY; 

    const { text } = JSON.parse(event.body);

    try {
        const response = await fetch("https://api.openai.com/v1/audio/speech", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "tts-1",
                voice: "onyx", // ou "alloy"
                input: text
            })
        });

        if (!response.ok) throw new Error("Erreur OpenAI Audio");

        const arrayBuffer = await response.arrayBuffer();
        
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "audio/mpeg"
            },
            body: Buffer.from(arrayBuffer).toString('base64'),
            isBase64Encoded: true
        };

    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};