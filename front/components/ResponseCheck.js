import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  height: 400px;
  text-align: center;
  margin: auto;
  line-height: 400px;
  font-size: ${props=> props.state === 'waiting' ? '13px' : props.state==='ready' ? '20px' : '30px'};
  font-weight: bold;
  user-select: none;
  color: ${props=> props.state==='ready' ? 'white' : 'black'};
  background-color: ${props=> props.state === 'waiting' ? 'aqua' : props.state==='ready' ? 'red' : 'greenyellow'};
`;

const TimeWrapper = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.button`
  background-color: blue;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  margin: 4px 2px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('총 기회는 5회 주어집니다. 다음 준비화면에서 배경화면이 초록색이 되었을 때 클릭하시면 됩니다. 시작하려면 클릭해주세요.');
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요!');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };
  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <>
        <TimeWrapper>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</TimeWrapper>
        <ButtonWrapper onClick={onReset}>리셋</ButtonWrapper>
      </>
  };

  return (
    <>
        <Wrapper
          state={state}
          onClick={onClickScreen}
        >
          {message}
        </Wrapper>
        {renderAverage()}
    </>
  );
};

export default ResponseCheck;