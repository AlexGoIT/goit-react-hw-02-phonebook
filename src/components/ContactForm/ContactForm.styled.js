import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input {
      height: 30px;
      border-radius: 6px;
      font-size: 18px;
    }
  }

  button {
    height: 35px;
    margin-block: 20px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    background-color: #4caf50;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #4cba50;
    }
  }
`;
