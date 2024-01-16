import { Box, Button, Center, Textarea } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import speak from './lib/Voice'
import settings from './ts/example/Settings'

function App() {
  const [text,setText] = useState<string>("");

  const speakOnClick = () => {
    speak(text,settings.voiceId,settings.elevenLabsApiKey);
  }

  const updateText = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Center h={"100svh"}>
      <Box w="40svw">
        <Textarea w="100%" resize="none" onChange={updateText}/>
        <Button w="100%" onClick={speakOnClick}>Say it!</Button>
      </Box>
      
    </Center>
  )
}

export default App
