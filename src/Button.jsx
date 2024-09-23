import React from 'react';
import sendSMS from './SendSMS';

function Button() {
  const handleSendSMS = () => {
        console.log('Sending SMS...');
        sendSMS('Hello! This is a test message.', '+917200488151');  // Replace with your number
      
  };

  return (
    <div className='App'>
      <button onClick={handleSendSMS}>Send Test SMS</button>
    </div>
  );
}

export default Button;
