import React, { useState } from "react";
import "../../styles/jsonFormatter.css";

export default function JsonFormatter() {
    const [inputJson, setInputJson] = useState("");
    const [formattedJson, setFormattedJson] = useState("");
    const [copied, setCopied] = useState(false);

    const handleFormat = () => {
        try {
            const parsedJson = JSON.parse(inputJson);
            setFormattedJson(JSON.stringify(parsedJson, null, 4)); // Pretty-print JSON
        } catch (error) {
            setFormattedJson("Invalid JSON");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(formattedJson);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <h2 className="title">JSON Formatter</h2>
            <p className="subtitle">Format & Beautify your JSON Data</p>

            {/* JSON Input & Output Side by Side */}
            <div className="json-container">
                <div className="json-box">
                    <label>Raw JSON</label>
                    <textarea
                        className="json-input"
                        placeholder="Paste your JSON here..."
                        value={inputJson}
                        onChange={(e) => setInputJson(e.target.value)}
                    />
                </div>

                <div className="json-box">
                    <label>Formatted JSON</label>
                    <textarea
                        className="json-output"
                        readOnly
                        value={formattedJson}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="button-group">
                <button onClick={handleFormat} className="format-btn">Format JSON</button>
                <button onClick={handleCopy} className="copy-btn">{copied ? "Copied" : "Copy"}</button>
            </div>
        </>
    );
}
