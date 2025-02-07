import React, { useState } from "react";
import "../../styles/base64.css"; // Using the same CSS for both

export default function UrlEncoderDecoder() {
    const [input, setInput] = useState("");
    const [isEncoding, setIsEncoding] = useState(true);
    const [copied, setCopied] = useState(false);

    const handleConvert = (text, encode) => {
        try {
            return encode ? encodeURIComponent(text) : decodeURIComponent(text);
        } catch (error) {
            return "Invalid Input";
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleModeSwitch = (encode) => {
        setIsEncoding(encode);
        setInput(""); // Clear input when switching modes
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(handleConvert(input, isEncoding));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <h2 className="title">URL Encoder/Decoder</h2>
            <p className="subtitle">Free, Open Source & Ad-free</p>

            {/* Toggle Buttons */}
            <div className="toggle-group">
                <button className={isEncoding ? "active" : ""} onClick={() => handleModeSwitch(true)}>Encode</button>
                <button className={!isEncoding ? "active" : ""} onClick={() => handleModeSwitch(false)}>Decode</button>
            </div>

            {/* Input & Output */}
            <label>Text to {isEncoding ? "encode" : "decode"}</label>
            <textarea
                className={`input-box ${!isEncoding ? "decoded" : ""}`}
                placeholder="Paste your URL here"
                value={input}
                onChange={handleInputChange}
            />

            <label>Encoded/Decoded URL</label>
            <textarea
                className="output-box"
                readOnly
                value={handleConvert(input, isEncoding)}
            />

            {/* Copy Button */}
            <button onClick={handleCopy} className="copy-btn">
                {copied ? "Copied" : "Copy"}
            </button>
        </>
    );
}
