import { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader disappears after 7 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-lg bg-black/30 z-50">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mt-4 text-lg font-semibold text-white">Loading...</div>
    </div>
  );
};

export default Loader;
