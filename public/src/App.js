import './App.css';
import { analytics } from './Firebase';
import { logEvent } from 'firebase/analytics'
import { GoogleGenerativeAI } from '@google/generative-ai'

function App() {
  logEvent(analytics, 'Starting app');

  const onClick = async () => {
    try {
      const apiKey = 'AIzaSyDJLhBpfaTcGG4JbDORAslSMqCG8so_GKg'
      const genAI = new GoogleGenerativeAI(apiKey)

      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash'
      })
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: 'text/plain'
      }
      const chatSession = model.startChat({
        generationConfig, history: []
      })
      const result = await chatSession.sendMessage('que es firebase')
      console.log(result.response.text())
    } catch (error) {
      console.error('Error prompting Gemini:', error)
      throw error
    }
  }

  return (
    <div className="App" onClick={onClick}>
      <button>Preguntar</button>
    </div >
  );
}

export default App;
