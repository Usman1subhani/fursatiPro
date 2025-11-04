// components/FindPerfectJob.jsx
import React from "react";

const FindPerfectJob = () => {
  return (
    <section style={{ padding: "2rem", textAlign: "center", background: "#f5f5f5" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Find the Perfect Job for You</h2>
      <input
        type="text"
        placeholder="Search for jobs..."
        style={{ padding: "0.5rem 1rem", width: "300px", marginRight: "0.5rem" }}
      />
      <button style={{ padding: "0.5rem 1rem" }}>Search</button>
    </section>
  );
};

export default FindPerfectJob;
