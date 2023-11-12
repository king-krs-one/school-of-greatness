import { components } from '../../config/uiComponents';
import { CSSProperties } from 'react';

type sizeProps = 'base' | 'small';

export const getInputStyles = (isActive: boolean, isValid: boolean, isHover: boolean, size?: sizeProps) => {
  const { input } = components;

  const inputStyles: CSSProperties = {

    // styles from ui components config
    ...input.base,
    ...(size === 'small' ? input.small : {}),
    ...(isActive || isHover ? input.states.focus : {}),
    ...(!isValid ? input.states.error : {}),

    // additional styles
    display: 'block',
    width: '100%',
    padding: '0.375rem 0.75rem',
  };

  return {
    input: inputStyles,
  };
};

export const getLabelStyles = (isActive: boolean, isValid: boolean, size?: sizeProps) => {
  const { input, input: { label: labelCss } } = components;
  const inputHeight = size ? input[size].height : input.base.height;

  const label: CSSProperties = {
    ...labelCss.base,
    ...(size ? labelCss[size] : {}),
    position: 'absolute',
    top: `calc(${inputHeight} / 2)`, // half of input height
    left: '18px',
    pointerEvents: 'none',
    transform: 'translateY(-50%)',
    opacity: '0.6',
  };

  const labelFocus: CSSProperties = {
    ...labelCss.states.focus,
    ...(!isValid ? labelCss.states.error : {}),
    top: '-8px',
    left: '24px',
    transform: 'translateY(0)',
    pointerEvents: 'auto',
    opacity: '1',
  };

  // artificial border behind label to cover the text border
  const labelBgBorder: CSSProperties = {
    position: 'absolute',
    height: '2px',
    left: '-4px',
    top: 'calc(100% - 10px)',
    width: 'calc(100% + 8px)',
    backgroundColor: isActive ? '#14171c' : 'transparent',
    zIndex: '1',
  };

  return {
    label: (isActive ? {
      ...label,
      ...labelFocus,
    } : {
      ...label,
    }),
    labelBgBorder,
  };
};
