import React, { useState } from "react";
import "../../styles/passwordGenerator.css";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function PasswordGenerator() {
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+~|}{[]:;?><,./-=";

        let charPool = lowerChars;
        if (includeUppercase) charPool += upperChars;
        if (includeNumbers) charPool += numberChars;
        if (includeSymbols) charPool += symbolChars;

        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            generatedPassword += charPool[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="passwordGenerator">
            <h2 className="password-title">Password Generator</h2>
            <p className="subtitle">Generate secure and customizable passwords</p>

            {/* Password Display & Copy Button */}
            <div className="password-display">
                <input type="text" value={password} readOnly placeholder="Your Password" />
                <button onClick={handleCopy} className="copy-btn">
                    {copied ? <FaCheck color="green" /> : <FaCopy />}
                </button>
            </div>

            {/* Controls for password settings */}
            <div className="controls">
                <label>Password Length: {length}</label>
                <input
                    type="range"
                    min="6"
                    max="32"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />

                <div className="options">
                    <label>
                        <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
                        Include Uppercase
                    </label>

                    <label>
                        <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
                        Include Numbers
                    </label>

                    <label>
                        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
                        Include Symbols
                    </label>
                </div>
            </div>

            <button onClick={generatePassword} className="generate-btn">Generate Password</button>
            </div>
        </>
    );
}
