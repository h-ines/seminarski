import React, { useEffect, useState } from "react";
import "./loading.css";


function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader-overlay">
          <div className="loader">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default Loader;