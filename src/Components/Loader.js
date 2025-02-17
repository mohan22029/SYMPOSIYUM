import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="hacker-loader">
        <div className="loader-text">
          <span data-text="Initializing..." className="text-glitch">Checking if you’re a robot!.... 🤖</span>
        </div>
        <div className="loader-bar">
          <div className="bar-fill" />
          <div className="bar-glitch" />
        </div>
        <div className="particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;

  .hacker-loader {
    position: relative;
    width: 24em;
    height: 6em;
    background-color: #0a0a0a;
    border: 0.2em solid #00ff00;
    border-radius: 0.5em;
    padding: 1em;
    overflow: hidden;
    box-shadow: 0 0 1em rgba(0, 255, 0, 0.3);
  }

  .loader-text {
    text-align: center;
    margin-bottom: 1em;
  }

  .text-glitch {
    color: #00ff00;
    font-family: monospace;
    font-size: 1.5em;
    position: relative;
    display: inline-block;
  }

  .loader-bar {
    width: 100%;
    height: 0.5em;
    background-color: #003300;
    border-radius: 0.25em;
    position: relative;
    overflow: hidden;
  }

 .bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #00ff00;
  animation: bar-fill-animation 1.5s infinite ease-in-out; /* Increased to 5s */
}

.bar-glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 255, 0, 0.2),
    transparent
  );
  background-size: 200% 200%;
  animation: bar-glitch-animation 1s infinite linear; /* Increased to 5s */
}

 @keyframes bar-fill-animation {
  0%, 100% { width: 0; }
  50% { width: 100%; }
}
  @keyframes bar-glitch-animation {
    0% { background-position: 0 0; }
    100% { background-position: 200% 0; }
  }
`;

export default Loader;
