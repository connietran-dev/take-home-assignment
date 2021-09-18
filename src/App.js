import './App.css';
import { useState } from "react";

import ListItem from './ListItem/ListItem';

function App() {
  const [textInput, setTextInput] = useState('Here is some example text.');
  const [conversionMode, setConversionMode] = useState('lowercase');
  const [textOutput, setTextOutput] = useState('');
  const [outputList, setOutputList] = useState([]);

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // TODO: Set state outside of conditional
    if (conversionMode === 'lowercase') {
      const lowerOuput = textInput.toLowerCase();

      setTextOutput(lowerOuput);
      setOutputList([...outputList, lowerOuput]);
   
    } else if (conversionMode === 'uppercase') {
      const upperOutput = textInput.toUpperCase();

      setTextOutput(upperOutput);
      setOutputList([...outputList, upperOutput]);

    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
        <form onSubmit={handleSubmit}>
          <div className="form-control form-control__text">
            <label htmlFor="text">Text to be converted:</label>
            <textarea
              id="text"
              onChange={handleTextareaChange}
              value={textInput}
            />
          </div>
          <div className="form-control form-control__radio">
            <input
              type="radio"
              name="conversion"
              id="conversion-0"
              value="lowercase"
              checked={conversionMode === "lowercase"}
              onChange={handleRadioChange}
            />
            <label htmlFor="conversion-0">Convert text to lowercase</label>
          </div>
          <div className="form-control form-control__radio">
            <input
              type="radio"
              name="conversion"
              id="conversion-1"
              value="uppercase"
              checked={conversionMode === "uppercase"}
              onChange={handleRadioChange}
            />
            <label htmlFor="conversion-1">Convert text to uppercase</label>
          </div>
          <input type="submit" value="Submit" />
          <div className="result-wrapper form-control form-control__text">
            <label htmlFor="result">Converted text:</label>
            <output id="result">{textOutput}</output>
          </div>
        </form>

      <h2>Your Submitted Entries</h2>
      <ul>
        {outputList.map((output, index) => (
          <ListItem key={index} output={output} index={index}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
