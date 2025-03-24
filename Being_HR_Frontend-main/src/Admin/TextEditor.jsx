import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TextEditor.css"; // Importing CSS file

export default function TextEditor() {
  const [content, setContent] = useState("");
  const [submittedContent, setSubmittedContent] = useState("");
  const [alignment, setAlignment] = useState("left");
  const [fontSize, setFontSize] = useState("16");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    axios.get("/api/text")
      .then((response) => {
        if (response.data && response.data.text) {
          setSubmittedContent(response.data.text);
        } else {
          console.error("Invalid response structure", response.data);
        }
      })
      .catch((err) => console.error("Error fetching text", err));
  }, []);

  const applyFormat = (command, value = null) => {
    document.execCommand("styleWithCSS", true);
    if (command === "fontSize") {
      const span = document.createElement("span");
      span.style.fontSize = `${value}px`;
      const selection = document.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.surroundContents(span);
      }
    } else {
      document.execCommand(command, false, value);
    }
  };

  const handleSubmit = async () => {
    try {
      const htmlContent = document.getElementById("editor").innerHTML;
      setSubmittedContent(htmlContent);
      await axios.post("/api/text", { text: htmlContent });
      console.log("Text saved successfully");
    } catch (err) {
      console.error("Error saving text", err);
    }
  };

  return (
    <div className="container">
      <div className="toolbar">
        <button onClick={() => applyFormat("bold")} className="btn">B</button>
        <button onClick={() => applyFormat("italic")} className="btn">I</button>
        <button onClick={() => applyFormat("underline")} className="btn">U</button>
        <button onClick={() => applyFormat("strikeThrough")} className="btn">S</button>
      </div>
      <div className="toolbar">
        <button onClick={() => applyFormat("justifyLeft")} className="btn">Left</button>
        <button onClick={() => applyFormat("justifyCenter")} className="btn">Center</button>
        <button onClick={() => applyFormat("justifyRight")} className="btn">Right</button>
      </div>
      <div className="toolbar">
        <input 
          type="number" 
          min="12" 
          max="40" 
          value={fontSize} 
          onChange={(e) => setFontSize(e.target.value)} 
          onBlur={() => applyFormat("fontSize", fontSize)}
          className="input" 
          placeholder="Font Size" 
        />
        <input 
          type="color" 
          value={textColor} 
          onChange={(e) => applyFormat("foreColor", e.target.value)} 
          className="input" 
        />
      </div>
      <div
        id="editor"
        contentEditable={true}
        className="editor"
        style={{ textAlign: alignment }}
        onInput={(e) => setContent(e.target.innerHTML)}
      ></div>
      <p className="word-count">Word count: {content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length}</p>
      <button onClick={handleSubmit} className="submit-btn">Submit</button>
      {submittedContent && (
        <div className="submitted-content">
          <div dangerouslySetInnerHTML={{ __html: submittedContent }}></div>
        </div>
      )}
    </div>
  );
}