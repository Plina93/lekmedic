import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #B9D9EB;);
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 90%;
  }
`
export const Logo = styled(Link)`
  margin-left: 40px;
  margin-top: 40px;
  text-decoration: none;
  color: darkblue;
  font-weight: bold;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`
export const FormContent = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #041E42;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormButton = styled.button`
  background: #20ba74;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
`

