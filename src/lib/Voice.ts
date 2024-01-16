import axios from "axios";

function speak(text: string, voiceId: string, apiKey: string) {
    const data = {
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.7,
            style: 0.0
        }
    }

    const headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKey
    }

    axios.post(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        data,
        {
            headers: headers,
            responseType: 'blob'
        }
    ).then((response) => {
        const blob = new Blob([response.data], { type: "audio/mpeg" });
        const blobUrl = URL.createObjectURL(blob);
        const audio = new Audio(blobUrl);
        audio.play().catch(e => console.error('Error playing audio:', e));
    }
    ).catch((error) => {
        console.error('Error in text-to-speech:', error);
    });
}

export default speak;
