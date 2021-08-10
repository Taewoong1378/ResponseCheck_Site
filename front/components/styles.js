import styled from 'styled-components';
import { Button, Form } from 'antd';

export const FormWrapper = styled(Form)`
  font-family: 'Jua', sans-serif;
  margin-top: 10px;
  text-align: center;
`;

export const Wrapper = styled.div`
  font-family: 'Jua', sans-serif;
  border: 1px solid black;
  width: 70%;
  height: 400px;
  text-align: center;
  margin: auto;
  padding: 25px;
  overflow: hidden;
  text-overflow: clip;
  white-space: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  user-select: none;
  color: ${(props) => (props.state === 'ready' ? 'white' : 'black')};
  background-color: ${(props) => (props.state === 'waiting' ? 'aqua' : props.state === 'ready' ? 'red' : props.state === 'finish' ? 'gray' : 'greenyellow')};
`;

export const Ul = styled.ul`
  width: 100%;
  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-weight: bold;
  line-height: 2.0em;
  font-size: 15px;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  font-family: 'Jua', sans-serif;
  text-align: center;
  font-size: 17px;
  line-height: 2.0em;
`;

export const ButtonWrapper = styled(Button)`
  font-family: 'Jua', sans-serif;
  font-size: 16px;
  margin: 4px 2px;
  margin-top: 110px;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;