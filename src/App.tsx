import { useState, useRef, useEffect } from 'react';
import { IDetectClick } from './types/DetectClickType';
import {
  handleClickInside,
  handleDetectClick,
} from './utils/handleDetectClick';
import './App.css';

function App() {
  const [
    hasClickedOutsideTarget,
    setHasClickedOutsideTarget,
  ] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const args: IDetectClick = {
      ref: divRef,
      setHasClickedOutsideTarget,
    };
    handleDetectClick(args);
  }, [hasClickedOutsideTarget]);

  return (
    <div className="main">
      <div
        ref={divRef}
        className="inside"
        onClick={() => handleClickInside(setHasClickedOutsideTarget)}
      >
        <p>{hasClickedOutsideTarget ? 'outside!' : 'inside!'}</p>
      </div>
    </div>
  );
}

export default App;
