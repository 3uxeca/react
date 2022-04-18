import React, { useState } from 'react';
import styled from 'styled-components';
import useTranslate from '../hooks/useTranslate';
import TranslateResult from './TranslateResult';

const Translate = () => {
    const { translateWord } = useTranslate();
    const [srcText, setSrcText] = useState('');
    const [srcLang, setSrcLang] = useState('');
    const [targetLang, setTargetLang] = useState('');

    const onSrcTextUpdate = (e) => {
        setSrcText(e.target.value);
        console.log("onSrcTextUpdate", e.target.value);
    }

    const onSrcLangUpdate = (e) => {
        setSrcLang(e.target.value);
        console.log("onSrcLangUpdate", e.target.value);
    }

    const onTargetLangUpdate = (e) => {
        setTargetLang(e.target.value);
        console.log("onTargetLangUpdate", e.target.value);
    }
    const onClickTranslate = (e) => {
        translateWord(srcText, srcLang, targetLang);
    }

    return (
        <TranslateWrapper>
            <h1>Kakao Translate API</h1>
            <div>
                <select
                    name='srcLang'
                    onChange={onSrcLangUpdate}
                    value={srcLang}
                    className='lang-select'
                >   
                    <option value=''>입력 언어</option>
                    <option value='kr'>한국어</option>
                    <option value='en'>영어</option>
                </select>
                <select
                    name='targetLang'
                    onChange={onTargetLangUpdate}
                    value={targetLang}
                    className='lang-select'
                >
                    <option value=''>번역 언어</option>
                    <option value='kr'>한국어</option>
                    <option value='en'>영어</option>
                    <option value='ru'>러시아어</option>
                    <option value='jp'>일본어</option>
                    <option value='cn'>중국어</option>
                </select>                
                <input 
                    className='input-src'
                    type='text'
                    placeholder='번역할 내용을 입력해주세요.'
                    name='fromText'
                    onChange={onSrcTextUpdate}
                    value={srcText}
                />
                <button 
                    onClick={onClickTranslate}
                    className='btn-translate'
                >
                    번역
                </button>
            </div>
            <div>
                <TranslateResult />
            </div>
        </TranslateWrapper>
    )
};

const TranslateWrapper = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
    .lang-select {
        width: 100px;
        border: 1px solid #e0e2e7;
        border-radius: 8px;
        padding: 8px;
        margin-right: 5px;
        color: #555;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    .input-src {
        width: 300px;
        height: 35px;
        box-sizing: border-box;
        padding: 8px;
        border: 1px solid #e0e2e7;
        border-radius: 8px;
        color: #555;
        &:focus {
            outline: none;
        }
    }
    .btn-translate {
        width: 64px;
        height: 35px;
        background-color: #999;
        border-radius: 8px;
        color: #fff;
        font-weight: 600;
        border: 1px solid #999;
        margin-left: 5px;
        cursor: pointer;
        &:hover {
            background-color: #777;
        }
    }
    
`;

export default Translate;