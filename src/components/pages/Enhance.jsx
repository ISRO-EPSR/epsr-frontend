import React from 'react';

const Enhance = () => {
  // Inline styles for the iframe and image container
  const iframeStyles = {
    border: 'none',
    width: '80vw',
    height: '80vh'
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    overflow: 'hidden'
  };

  const iframeContainerStyles = {
    width: '80vw',
    height: '80vh',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={containerStyles}>
      <div style={iframeContainerStyles}>
        <iframe
          src="http://localhost:7860"
          title="Gradio Interface"
          style={iframeStyles}
        />
      </div>
    </div>
  );
};

export default Enhance;
