interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  // You can add your custom props here
  // customProp?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  // Extract the expected props
  const { src, alt, className, ...otherProps } = props;

  return (
    <img
      src={src}
      alt={alt}
      className={`mx-auto w-auto
        ${className}`}
      {...otherProps} // Pass any additional props to the input element
    />
  );
};

export default Image;
