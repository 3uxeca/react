import React from 'react';
import styled from 'styled-components';
import useTranslate from '../hooks/useTranslate';

const TranslateResult = () => {
    const { targetText } = useTranslate();
    return (
        <Wrapper>
            {targetText ? targetText : <span className='placeholder'>여기에 번역된 내용이 표시됩니다.</span>}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 350px;
    min-height: 100px;
    padding: 15px;
    margin: 0 auto;
    border: 1px solid #e0e2e7;
    border-radius: 8px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    .placeholder {
        color: #777;
    }
`;

export default TranslateResult;