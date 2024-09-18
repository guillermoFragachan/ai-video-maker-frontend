import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export function Chat() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const sendMessage = () => {
      if (message.trim() !== '') {
        // Simulating AI response
        const aiResponse = `AI: Response to "${message}"`;
        setChatHistory([...chatHistory, { sender: 'You', message }, { sender: 'AI', message: aiResponse }]);
        setMessage('');
      }
    };
  
    return (
        <div className="p-shadow-3" style={{ backgroundColor: '#333', borderRadius: '8px', width: '80%', }}>
          <div style={{ height: '96%', padding: '1rem', overflowY: 'auto', backgroundColor: '#2a2a2a', borderRadius: '8px 8px 0 0' }}>
            {chatHistory.map((chat, index) => (
              <div key={index} style={{ marginBottom: '1rem', color: '#fff' }}>
                <strong>{chat.sender}: </strong>
                <span>{chat.message}</span>
              </div>
            ))}
          </div>
          <div className="p-d-flex p-jc-between p-ai-center p-p-2" style={{ backgroundColor: '#444', borderRadius: '0 0 8px 8px' }}>
          <InputText
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="p-inputtext-sm"
            style={{ flex: 1, marginRight: '0.5rem', backgroundColor: '#555', color: '#fff' }} // lighter background for input
          />
          <Button
            icon="pi pi-send"
            onClick={sendMessage}
            className="p-button-sm"
            style={{
              backgroundColor: message.trim() ? '#fff' : '#aaa', // white if there's input, light grey otherwise
              color: message.trim() ? '#000' : '#666', // text color change for contrast
              border: 'none',
            }}
          />
        </div>
        </div>
    );
  }