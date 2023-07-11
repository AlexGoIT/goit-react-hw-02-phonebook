import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;

  button {
    height: 35px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;
