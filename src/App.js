import React, { useState, useEffect } from "react";
import { askQuestion } from "./api";

function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [followUps, setFollowUps] = useState([]);
    const [confidence, setConfidence] = useState(null);
    const [citations, setCitations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? "#1e1e1e" : "#ffffff";
        document.body.style.color = isDark ? "#ffffff" : "#000000";
    }, [isDark]);

    const handleAsk = async (q = question) => {
        if (!q) return;
        setLoading(true);
        const response = await askQuestion(q);
        setAnswer(response.answer || "No answer available.");
        setFollowUps(response.follow_up_questions || []);
        setConfidence(response.confidence_score || null);
        setCitations(response.citations || []);
        setLoading(false);
    };

    const handleFollowUpClick = (fq) => {
        setQuestion(fq);
        handleAsk(fq);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "sans-serif", transition: "0.3s ease" }}>
            <header style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "2.8rem", color: isDark ? "#facc15" : "#4B0082", transition: "color 0.3s ease" }}>
                    AskVerse
                </h1>
                <p style={{ color: isDark ? "#cccccc" : "#555" }}>
                    Your smart assistant for all things Kafka, Spark, and React — ask away!
                </p>
                <button 
                    onClick={() => setIsDark(!isDark)}
                    style={{ marginTop: "1rem", padding: "8px 14px", border: "none", borderRadius: "6px", cursor: "pointer", backgroundColor: isDark ? "#facc15" : "#333", color: isDark ? "#000" : "#fff", transition: "all 0.3s ease" }}
                >
                    Toggle {isDark ? "Light" : "Dark"} Mode
                </button>
            </header>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Ask something like 'How does Kafka handle stream processing?'"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    style={{ padding: "10px", flex: 1, fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc" }}
                />
                <button
                    onClick={() => handleAsk()}
                    disabled={loading}
                    style={{ padding: "10px 20px", backgroundColor: "#6366f1", color: "white", border: "none", borderRadius: "8px", transition: "0.3s ease" }}
                >
                    {loading ? "Loading..." : "Ask"}
                </button>
            </div>

            {answer && (
                <div style={{ backgroundColor: isDark ? "#2c2c2c" : "#f9f9f9", borderRadius: "10px", padding: "20px", marginTop: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "0.3s ease" }}>
                    <strong style={{ fontSize: "1.2rem" }}>Answer:</strong>
                    <p style={{ marginTop: "10px" }}>{answer}</p>

                    {citations.length > 0 && (
                        <div style={{ marginTop: "10px", fontSize: "0.85rem", color: isDark ? "#aaa" : "#555" }}>
                            <strong>Citations:</strong>
                            <ul>
                                {citations.map((cite, index) => (
                                    <li key={index}>{cite}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {confidence !== null && (
                        <div style={{ marginTop: "10px", fontSize: "0.9rem", color: isDark ? "#ccc" : "#888" }}>
                            Confidence Score: <strong>{(confidence * 100).toFixed(1)}%</strong>
                        </div>
                    )}
                </div>
            )}

            {followUps.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <strong>Follow-up Questions:</strong>
                    <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {followUps.map((fq, index) => (
                            <button
                                key={index}
                                onClick={() => handleFollowUpClick(fq)}
                                style={{ padding: "8px 12px", backgroundColor: isDark ? "#4B5563" : "#e0e0e0", color: isDark ? "#fff" : "#000", borderRadius: "20px", border: "none", cursor: "pointer", transition: "0.2s ease" }}
                            >
                                {fq}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
