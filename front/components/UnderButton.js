import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nicknameRequestAction } from '../reducers/user';
import { Input, Button } from 'antd';
import { FormWrapper } from './styles';

const UnderButton = ({ score }) => {
    const dispatch = useDispatch();
    const { nicknameLoading, nicknameError } = useSelector((state) => state.user);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        if (nicknameError) {
            alert(nicknameError);
        }
    }, [nicknameError]);
  
    const onSubmitForm = useCallback(() => {
        dispatch(nicknameRequestAction({ nickname, score }));
    }, [nickname]);
    
    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    return (
        <div>
            <FormWrapper onFinish={onSubmitForm}>
              <div style={{ overflow: 'hidden' }}>
                <label 
                htmlFor="user-nickname"
                style={{ marginRight: '10px' }}
                >
                닉네임 :
                </label>
                <Input
                style= {{ width: '25%' }}
                name="user-nickname"
                value={nickname}
                onChange={onChangeNickname}
                required
                />
                <Button 
                type="primary" 
                htmlType="submit" 
                loading={nicknameLoading} 
                style={{ marginLeft: '15px', lineHeight: '1.8em' }}
                >
                점수 제출
                </Button>
              </div>
            </FormWrapper>
        </div>
    );
}

UnderButton.propTypes = {
    score: PropTypes.number.isRequired,
};

export default UnderButton;

