// components/Container.tsx

import React, { CSSProperties } from 'react';

interface TexturedBackgroundProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

const TexturedBackground: React.FC<TexturedBackgroundProps> = ({
  children,
  style,
}) => {
  return (
    <div style={style} className="container m-auto flex justify-center">
      {children}
    </div>
  );
};

export default TexturedBackground;
