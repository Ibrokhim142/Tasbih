import React, { useState, useEffect, useRef } from 'react';
import './Tasbih.css';
const Tasbih = () => {
    const [count, setCount] = useState(0);
    const audioRef = useRef(null);

    

    const playSound = () => {
        setCount((prevCount) => (prevCount < 99 ? prevCount + 1 : 1));
    };
    useEffect(() => {
      if (count === 33 || count === 66 || count === 99) {
          audioRef.current.play();
      }
  }, [count]);


    return (
        <div className='tasbih'>
           <div>
           <h1 className='tasbih_tittle'>Tasbih</h1>
            <p>Sanoq: {count}</p>
            <button onClick={playSound}>Tasbihni bosing</button>
            <audio ref={audioRef} src="..//public/Bismillah.mp3" />
           </div>
        </div>
    );
};

export default Tasbih;
