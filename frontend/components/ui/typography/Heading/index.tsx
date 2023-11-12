import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const H1: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h1 {...otherProps}>{children}</h1>;
};

const H2: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h2 {...otherProps}>{children}</h2>;
};

const H3: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h3 {...otherProps}>{children}</h3>;
};

const H4: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h4 {...otherProps}>{children}</h4>;
};

const H5: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h5 {...otherProps}>{children}</h5>;
};

const H6: React.FC<HeadingProps> = ({ children, ...otherProps }) => {
  return <h6 {...otherProps}>{children}</h6>;
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
};

const sizes = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-md",
  h6: "text-sm"
};

const Heading: React.FC<HeadingProps> = ({ children, level, className, ...otherProps }) => {
  const HeadingComponent = components[level || 'h1']; 
  const HeadingSize = sizes[level || 'h1']; 

  return (
    <HeadingComponent
      className={`${HeadingSize} mb-2 font-bold leading-tight tracking-tight text-gray-900 dark:text-white 
        ${className}`}
      {...otherProps}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
