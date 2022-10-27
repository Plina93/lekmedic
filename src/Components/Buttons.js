import styled from 'styled-components'
import {Link as scroll} from 'react-scroll'

export const Button = styled(scroll)`
  display: flex;
  border-radius: 50px;
  border: none;
  justify-content: center;
  align-items: center;
  outline: none;
  white-space: nowrap;
  background: #00008B;
  color: white;
  padding: 12px 40px;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #01BF71;
    color: #010606;
  }
`