import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UtilityContainer from "./components/UtilityContainer";
import Base64EncoderDecoder from "./components/utilities/Base64EncoderDecoder";
import JsonFormatter from "./components/utilities/JsonFormatter";
import UrlEncoderDecoder from "./components/utilities/UrlEncoderDecoder";

import TimestampToDateConverter from "./components/utilities/TimestampToDateConverter"; // ✅ Corrected Import
import HexToRgbConverter from "./components/utilities/HexToRgbConverter";
import PasswordGenerator from "./components/utilities/PasswordGenerator";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/base64" element={<UtilityContainer><Base64EncoderDecoder /></UtilityContainer>} />
            <Route path="/json-formatter" element={<UtilityContainer><JsonFormatter /></UtilityContainer>} />
            <Route path="/url-encoder" element={<UtilityContainer><UrlEncoderDecoder /></UtilityContainer>} />
            <Route path="/timestamp-to-date" element={<UtilityContainer><TimestampToDateConverter /></UtilityContainer>} /> {/* ✅ Fixed */}
            <Route path="/hex-to-rgb" element={<UtilityContainer><HexToRgbConverter /></UtilityContainer>} />
            <Route path="/password-generator" element={<UtilityContainer><PasswordGenerator /></UtilityContainer>} />
        </Routes>
    );
}