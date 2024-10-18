import React from 'react';

const NotFound = () => {
    return (
        <div className="container-fluid" style={{ background: "#f5f5f5" }}>
      <div className="container mt-3 mb-3" style={{ textAlign: "center" }}>
      <img className="mb-4 mt-4" src={`${process.env.PUBLIC_URL}/404-medical.jpg`} alt="sadhu hospital" style={{ maxWidth: "100%" }} />
        </div>
        </div>
    );
};

export default NotFound;
