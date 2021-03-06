// @Flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Box from '../Box/Box';
import Button from '../Button/Button';
import { COLORS } from '../Constants';

const Background = styled.div`
  background: ${COLORS.grayDarker};
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s, bottom 0s 0.3s;
  z-index: 100;
`;

const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const Content = styled(Box)`
  background: ${COLORS.white};
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  margin: 100px auto 20px;
  max-width: 90%;
  padding: 10px;
  position: relative;
  width: 500px;
  z-index: 9999;
`;

const CloseButton = styled(Button)`
  float: right;
  margin-left: 10px;
  font-size: 1.2rem;
  padding: 0;
`;

type ModalProps = {
  children: any,
  closeButton?: Function | null,
};

class Modal extends React.Component<ModalProps> {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const { children, closeButton } = this.props;
    return ReactDOM.createPortal(
      <Wrapper>
        <Content aria-modal="true" >
          {closeButton &&
            <CloseButton appearance="link" icon="close" onClick={closeButton} />
          }
          {children}
        </Content>
        <Background />
      </Wrapper>,
      document.body,
    );
  }
}

Modal.defaultProps = {
  closeButton: null,
};

export default Modal;
