import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { blockSizes } from '../common/system';

const StyledAvatar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  height: calc(${() => blockSizes.md} - 2px);
  width: calc(${() => blockSizes.md} - 2px);
  border-radius: ${({ square }) => (square ? 0 : '50%')};
  overflow: hidden;
  ${({ noBorder, theme }) =>
    !noBorder &&
    `
    border-top: 2px solid ${theme.borderDark};
    border-left: 2px solid ${theme.borderDark};
    border-bottom: 2px solid ${theme.borderLightest};
    border-right: 2px solid ${theme.borderLightest};
    background: ${theme.material};
  `}
  ${({ src }) =>
    !src &&
    `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`;

const SlyledAvatarIMG = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Avatar = React.forwardRef(function Avatar(props, ref) {
  const { children, noBorder, square, src, alt, ...otherProps } = props;
  return (
    <StyledAvatar noBorder={noBorder} square={square} ref={ref} {...otherProps}>
      {src ? <SlyledAvatarIMG src={src} alt={alt} /> : children}
    </StyledAvatar>
  );
});

Avatar.defaultProps = {
  square: false,
  noBorder: false,
  src: undefined,
  children: null,
  alt: ''
};

Avatar.propTypes = {
  square: propTypes.bool,
  noBorder: propTypes.bool,
  children: propTypes.node,
  src: propTypes.string,
  alt: propTypes.string
};

export default Avatar;
