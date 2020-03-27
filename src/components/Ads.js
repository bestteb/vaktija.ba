import React from "react";
import Ikre from "../icons/Ikre.js";

function Ads({ theme }) {
  return (
    <div className="text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://donate.ikre.info/?lng=ba"
      >
        <Ikre style={{ marginTop: 20 }} alt="donate.ikre.info" />
        {theme === "dark" && (
          <p style={{ color: "#fff", fontWeight: "bold" }}>
            Bürgerforum Ikre e.V. München
          </p>
        )}

        {theme === "light" && (
          <p style={{ color: "#19194b", fontWeight: "bold" }}>
            Bürgerforum Ikre e.V. München
          </p>
        )}
      </a>
    </div>
  );
}

export default Ads;
