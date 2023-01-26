import React from "react";

export default function QandA({ submit, setInput, output}) {
  return (
    <div>
      <textarea
        className="text-box"
        cols={60}
        rows={20}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={submit}>
        Submit
      </button>

      <h3>{output.length > 0 ? output : ""}</h3>
    </div>
  );
}
