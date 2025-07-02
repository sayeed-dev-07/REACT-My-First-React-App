import { useState } from 'react';
let now = new Date()
export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    // const [time, setTime] = useState('')
    if (isSent) {
        return <h1>Thank you!</h1>;
    }
    // eslint-disable-next-line
    
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
        }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br />
            <button type="submit">Send</button>
            <h1>{now.getHours()}:{now.getMinutes()}:{now.getSeconds()}</h1>
        </form>
    );

}
