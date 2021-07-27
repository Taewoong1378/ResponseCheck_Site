import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  font-size: 19px;
  font-weight: bold;
  user-select: none;
  color: ${props=> props.state==='ready' ? 'white' : 'black'};
  background-color: ${props=> props.state === 'waiting' ? 'aqua' : props.state==='ready' ? 'red' : props.state==='finish' ? 'gray' : 'greenyellow'};
`;

const TimeWrapper = styled.ul`
  margin-top: 30px;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%); 
  font-weight: bold;
  line-height: 2.0em;
  font-size: 15px;
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  font-size: 20px;
  text-align: center;
  line-height: 2.0em;
`;

const ButtonWrapper = styled.button`
  background-color: gray;
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
  margin-top: 120px;
  margin-bottom: 10px;
  cursor: pointer;
`;


const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  // eslint-disable-next-line react/jsx-key
  const [message, setMessage] = useState(['기회는 5번! 다음 화면에서 배경이 초록색이 되는 순간 클릭하세요.', <br/>, <br/>, '시작하려면 클릭해주세요.']);
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = (e) => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('초록색이 되면 클릭하세요!');
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시네요 ㅡ.ㅡ 초록색이 된 후에 클릭하세요!');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      // eslint-disable-next-line react/jsx-key
      setMessage(['기회는 5번! 다음 화면에서 배경화면이 초록색이 되는 순간 클릭하세요', <br/>, <br/>, '시작하려면 클릭해주세요.']);
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
    if(result.length === 5){
      setState('finish');
      setMessage('다시하시려면 하단의 다시 버튼을 눌러주세요');
      e.preventDefault();
    }
  };
  const onReset = () => {
    setResult([]);
  };
  
  const renderAverage = () => {
    return result.length === 0
      ? null
      : result.length === 5
      ? 
      <>
        <TimeWrapper>
          <Li>평균 : {Math.round(result.reduce((a, c) => a + c) / result.length)}ms</Li>
          <Li>{Math.round(result.reduce((a, c) => a + c) / result.length) > 250 ? '연습 좀 더 하셔야겠네요!' : Math.round(result.reduce((a, c) => a + c) / result.length) > 220 ? '이 정도면 전체 평균 정도 수준이네요!' : '정말 빠른 반응 속도를 가지고 있네요!'}</Li>
        </TimeWrapper>
        <ButtonWrapper onClick={onReset}>다시!</ButtonWrapper>
      </>
      :
       <>
        <TimeWrapper>
          <li>1회차 : {result[0] ? `${result[0]}ms` : null}</li>
          <li>2회차 : {result[1] ? `${result[1]}ms` : null}</li>
          <li>3회차 : {result[2] ? `${result[2]}ms` : null}</li>
          <li>4회차 : {result[3] ? `${result[3]}ms` : null}</li>
          <li>5회차 : {result[4] ? `${result[4]}ms` : null}</li>
        </TimeWrapper>
        
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