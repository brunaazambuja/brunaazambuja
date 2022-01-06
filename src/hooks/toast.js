import React, {
  createContext, useContext, useCallback, useState, useEffect,
} from 'react';
import { v4 as uuid } from 'uuid';
import { useTransition, animated } from 'react-spring';

import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import styled, { css } from 'styled-components';

const ToastContext = createContext({});

function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider.');
  return context;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};
export const Container = styled(animated.div)`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div { margin-top: 8px; }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg { margin: 4px 12px 0 0; }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasdescription
    && css`
      align-items: center;
      svg { margin-top: 0; }
    `}
`;
const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message?.id);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message?.id]);

  return (
    <Container
      type={message?.type}
      hasdescription={Number(!!message?.description)}
      style={style}
    >
      {icons[message?.type || 'info']}

      <div>
        <strong>{message?.title}</strong>
        {message?.description && <p>{message?.description}</p>}
      </div>

      <button onClick={() => removeToast(message?.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export const ContainerDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
`;

const ToastContainer = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message, i) => i,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <ContainerDiv>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </ContainerDiv>
  );
};

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(
    ({ type, title, description }) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message?.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };
