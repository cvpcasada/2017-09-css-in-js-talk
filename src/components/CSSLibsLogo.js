import styled, { css, keyframes } from 'styled-components';

const bounceKeyframe = keyframes`
from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const bounceAnimation = css`
  animation: ${bounceKeyframe} linear 1s both infinite;
  transform-origin: center bottom;
`;

const CSSLibsLogo = styled.div`
    // animate
    ${props => props.animate && bounceAnimation};
    
    // background: ${props => props.bgColor};
    // color: ${props => props.textColor || 'inherit'};
    display: flex;
    width: 300px;
    margin: 0 1rem;
    flex-direction: column;
    border: 1px solid;
    padding: 1rem;
    
    > span:first-child {
      font-size: 64pt;
    }
    
    > span:last-child {
      // text-align: ${props => props.textAlign || 'inherit'};
      // font-family: ${props => props.textFont || 'Helvetica'}, 'sans-serif';
      // font-weight: ${props => (props.bold ? 'bold' : 'normal')};
      
      margin-top: 1rem;
      font-size: 1.8rem;
    }
`;

export default CSSLibsLogo;
