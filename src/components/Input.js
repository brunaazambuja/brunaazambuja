import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';
import InputMask from 'react-input-mask';

import { Container, Error } from './styles/Input';

const Input = ({
  name,
  icon: Icon,
  containerStyle = {},
  big = false,
  mask = '',
  selectArray = [],
  file = false,
  select = '',
  label = '',
  ...rest
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [selectedValue, setSelectedValue] = useState(select);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current?.value) setIsFilled(true);
    else setIsFilled(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
      big={big}
      file={file}
      select={selectArray.length > 0}
    >
      {Icon && <Icon size={file ? 40 : 20} />}
      {big && (
        <textarea
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      )}
      {selectArray.length > 0 && (
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          {...rest}
        >
          {selectArray.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
      {mask && (
        <InputMask
          mask={mask}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      )}
      {(!big && !mask && selectArray.length <= 0) && (
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      )}
      {file && (<p>{label}</p>)}
      {file && isFilled && (<FiCheck color="#2e656a" size={40} />)}

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
