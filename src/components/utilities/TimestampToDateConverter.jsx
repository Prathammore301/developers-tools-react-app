import React, { useState } from "react";
import "../../styles/timestampToDateConverter.css";

export default function TimestampToDateConverter() {
    const [timestamp, setTimestamp] = useState("");
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const handleConvert = (input) => {
        if (!/^\d{1,13}$/.test(input)) {
            return "Invalid timestamp format.\nPlease use milliseconds (11-13 digits) or seconds (1-10 digits).";
        }

        let timestampNum = parseInt(input, 10);
        let formatDetected = "seconds";

        if (timestamp.length >= 11) {
            timestampNum = timestampNum / 1000; // Convert milliseconds to seconds
            formatDetected = "milliseconds";
        }

        const utcDate = new Date(timestampNum * 1000).toUTCString();
        const localDate = new Date(timestampNum * 1000).toString();

        return `Format detected: ${formatDetected}\n---\nGreenwich Mean Time:  ${utcDate}\nYour time zone:       ${localDate}`;
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setTimestamp(input);
        setOutput(handleConvert(input));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <h2 className="title">Timestamp to Date Converter</h2>
            <p className="subtitle">Free, Open Source & Ad-free</p>

            {/* Input Box */}
            <label>Timestamp (milliseconds or seconds)</label>
            <textarea
                className="timestamp-input"
                placeholder="Enter timestamp..."
                value={timestamp}
                onChange={handleInputChange}
            />

            {/* Output Box */}
            <label>Date</label>
            <textarea
                className="timestamp-output"
                readOnly
                value={output}
            />

            {/* Copy Button */}
            <button onClick={handleCopy} className="copy-btn">
                {copied ? "Copied" : "Copy"}
            </button>
        </>
    );
}
