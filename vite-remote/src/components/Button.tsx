import React from 'react';

const Button: React.FC = () => {
  return (
    <button onClick={() => alert('Hello from Vite Remote!')}>
      Remote Button
    </button>
  );
};

export default Button;
