import { useState } from 'react';

function InteractiveLearning() {
  const [activeTab, setActiveTab] = useState('visualizer');

  return (
    <div className="interactive-container">
      <h2>Interactive Learning</h2>
      
      <div className="interactive-tabs">
        <button 
          className={`tab-button ${activeTab === 'visualizer' ? 'active' : ''}`}
          onClick={() => setActiveTab('visualizer')}
        >
          Algorithm Visualizer
        </button>
        <button 
          className={`tab-button ${activeTab === 'playground' ? 'active' : ''}`}
          onClick={() => setActiveTab('playground')}
        >
          Code Playground
        </button>
        <button 
          className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Practice Quiz
        </button>
      </div>

      <div className="interactive-content">
        {activeTab === 'visualizer' && (
          <div className="visualizer-section">
            <h3>Algorithm Visualizer</h3>
            <div className="visualizer-container">
              <div className="control-panel">
                <select className="algorithm-select">
                  <option value="bubble">Bubble Sort</option>
                  <option value="quick">Quick Sort</option>
                  <option value="merge">Merge Sort</option>
                </select>
                <button className="control-button">Start</button>
                <button className="control-button">Reset</button>
              </div>
              <div className="visualization-area">
                {/* Visualization will be added here */}
                <p>Select an algorithm to visualize</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'playground' && (
          <div className="playground-section">
            <h3>Code Playground</h3>
            <div className="editor-container">
              <textarea 
                className="code-editor"
                placeholder="Write your code here..."
              />
              <div className="editor-controls">
                <button className="run-button">Run Code</button>
                <button className="clear-button">Clear</button>
              </div>
              <div className="output-window">
                Output will appear here...
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="quiz-section">
            <h3>Practice Quiz</h3>
            <div className="quiz-container">
              <div className="question-card">
                <p className="question">What is the time complexity of Quick Sort in average case?</p>
                <div className="options">
                  <button className="option-button">O(n)</button>
                  <button className="option-button">O(n log n)</button>
                  <button className="option-button">O(n²)</button>
                  <button className="option-button">O(log n)</button>
                </div>
              </div>
              <button className="next-button">Next Question</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveLearning;