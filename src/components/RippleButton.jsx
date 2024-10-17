import  { useState, useEffect } from 'react';

const RippleButton = ({ children, className, ...props }) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timeout = setTimeout(() => {
        setRipples([]);
      }, 600); // Thời gian của hiệu ứng ripple

      return () => clearTimeout(timeout);
    }
  }, [ripples]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;

    const newRipple = {
      x,
      y,
      diameter
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      {...props}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-[#F5DF77] opacity-100 animate-ripple"
          style={{
            width: ripple.diameter,
            height: ripple.diameter,
            top: ripple.y,
            left: ripple.x,
          }}
        ></span>
      ))}
      {children}
    </button>
  );
};

export default RippleButton;
