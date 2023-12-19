// components/ProgressBar.js
import React, { useEffect, useState } from 'react';

const ProgressBar = ({ startProgressBar }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (startProgressBar) {
      interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 5 : 100));
      }, 1000); // Ajusta el intervalo según tu preferencia
    }

    return () => clearInterval(interval);
  }, [startProgressBar]);

  return <div className="progressBar" style={{ width: `${progress}%` }} />;
};

export default ProgressBar;