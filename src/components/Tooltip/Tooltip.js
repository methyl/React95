import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Tip = styled.span`
  position: absolute;
  bottom: -4px;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 100%);
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.borderDarkest};
  background: ${({ theme }) => theme.tooltip};
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

const Tooltip = ({
  children,
  text,
  delay,
  className,
  style,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const [delayTimer, setDelayTimer] = useState(null);

  const handleEnter = () => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    setDelayTimer(timer);
  };

  const handleLeave = () => {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return (
    <Wrapper onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Tip show={show} className={className} style={style} {...otherProps}>
        {text}
      </Tip>
      {children}
    </Wrapper>
  );
};

Tooltip.defaultProps = {
  delay: 1000,
  className: '',
  style: {}
};

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  delay: propTypes.number
};

export default Tooltip;
