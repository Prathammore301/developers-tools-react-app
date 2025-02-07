import React, { useState } from "react";
import "../../styles/hexToRgbConverter.css";

export default function HexToRgbConverter() {
    const [hex, setHex] = useState("#b70000");
    const [rgb, setRgb] = useState({ r: 183, g: 0, b: 0 });

    // Convert HEX to RGB
    const hexToRgb = (hex) => {
        hex = hex.replace(/^#/, "");
        if (hex.length === 3) {
            hex = hex.split("").map((char) => char + char).join("");
        }
        if (hex.length !== 6) return null;

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return { r, g, b };
    };

    // Convert RGB to HEX
    const rgbToHex = (r, g, b) => {
        const toHex = (c) => c.toString(16).padStart(2, "0");
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    // Handle HEX input change
    const handleHexChange = (e) => {
        let value = e.target.value;
        if (!/^#?[0-9A-Fa-f]{0,6}$/.test(value)) return;

        if (value.length === 7 && value.startsWith("#")) {
            const newRgb = hexToRgb(value);
            if (newRgb) setRgb(newRgb);
        }
        setHex(value.startsWith("#") ? value : `#${value}`);
    };

    // Handle RGB input change
    const handleRgbChange = (e) => {
        let { name, value } = e.target;
        value = Math.min(255, Math.max(0, Number(value) || 0));

        const newRgb = { ...rgb, [name]: value };
        setRgb(newRgb);
        setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    };

    return (
        <>
            <h2 className="hex-title">HEX to RGB Converter</h2>
            <p className="subtitle">Free, Open Source & Ad-free</p>

            <form className="hex-form">
                {/* HEX Input */}
                <div className="input-group">
                    <label>HEX Value</label>
                    <div className="hex-input-container">
                        <input
                            type="text"
                            value={hex}
                            onChange={handleHexChange}
                            maxLength="7"
                            className="hex-input"
                        />
                        <div
                            className="color-preview"
                            style={{ backgroundColor: hex }}
                        ></div>
                    </div>
                </div>

                {/* RGB Inputs */}
                <div className="rgb-input-group">
                    <div>
                        <label>Red</label>
                        <input
                            type="number"
                            name="r"
                            value={rgb.r}
                            onChange={handleRgbChange}
                            className="rgb-input"
                        />
                    </div>
                    <div>
                        <label>Green</label>
                        <input
                            type="number"
                            name="g"
                            value={rgb.g}
                            onChange={handleRgbChange}
                            className="rgb-input"
                        />
                    </div>
                    <div>
                        <label>Blue</label>
                        <input
                            type="number"
                            name="b"
                            value={rgb.b}
                            onChange={handleRgbChange}
                            className="rgb-input"
                        />
                    </div>
                </div>

                {/* Output Section */}
                <div className="output">
                    <p><b>CSS:</b> rgba({rgb.r}, {rgb.g}, {rgb.b}, 1)</p>
                    <p><b>Obj C:</b> [UIColor colorWithRed: {rgb.r / 255} green: {rgb.g / 255} blue: {rgb.b / 255} alpha: 1.0]</p>
                    <p><b>Swift:</b> UIColor(red: {rgb.r / 255}, green: {rgb.g / 255}, blue: {rgb.b / 255}, alpha: 1.00)</p>
                    <p><b>Android:</b> Color.rgb({rgb.r}, {rgb.g}, {rgb.b})</p>
                </div>
            </form>
        </>
    );
}
