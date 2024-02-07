import React from "react";
import './Letter.css';

const Letter = () => {
    return (
        <div className="letter-container">
            <h3>Happy Rose Day</h3>
            <div className="rectangle blue"></div>
            <div className="rectangle pink"></div>
            <p className="wish"><h2 className="letter head starting">Dear Friend, </h2>May your life be as vibrant and beautiful as a rose in full bloom, spreading joy and love wherever it goes. On this Rose Day, I wish you and our mutual friends an abundance of happiness, laughter, and cherished moments. Let's celebrate the beauty of friendship, gratitude, and the warmth of affection that binds us together. Remember, like a rose, you are resilient and capable of blooming even in challenging times. Here's to a friendship that continues to blossom and thrive, filling our lives with the sweet fragrance of love and camaraderie. Happy Rose Day! <h2 className="letter greet">Your Friend,</h2><h2 className="letter head">Souvik</h2></p>
            <footer>created by Souvik</footer>
        </div>
    );
}

export default Letter;