import axios from 'axios';

const sendSMS = async (message, phoneNumber) => {
    try {
        const response = await axios.post('http://localhost:5000/send-sms', {
            message,
            phoneNumber,  // Make sure this is passed correctly
        });
        console.log('SMS sent successfully:', response.data);
    } catch (error) {
        console.error('Failed to send SMS:', error.message);
    }
};
sendSMS('Hello! This is a test message.', '+917200488151');  // Your actual number


export default sendSMS;
