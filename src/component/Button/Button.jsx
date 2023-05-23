import React from "react";
import { styled } from "styled-components";
import redArrow from '../../assets/image/redArrow.svg';
import greenArrow from '../../assets/image/greenArrow.svg';
import ethereumBlue from '../../assets/image/ethereumBlue.svg'


const StyledButton = styled.button`
    width: 115px;
    height: 46px;
    border: 1px solid #E9E9E9;
    border-radius: 12px;
    background-color: white;
    font-size: 16px;
    line-height: 21px;
    display: block;
    margin: 0 auto;
`
const Proper = styled.div`
    background-color: white;
    border-radius: 12px;
    color: #747475;
    width: 164px;
    display: inline-block;
    margin: 20px 0;
    .nam{
        font-size: 14px;
    }
    .ethh{
        color: #747475;
        font-size: 12px;
    }
    .ethe{
        padding-right: 6px;
    }
    .ethenum{
        padding-right: 6px;
    }
`
export const Button = ({percent, children, nameETH, numETH, typeETH})=>{
    return (
    <Proper nameETH={nameETH} numETH={numETH} typeETH={typeETH}>
        <p className="nam">{nameETH}</p>
        {typeETH !== "ETH" ? "+" : <img className="ethe" src={ethereumBlue} alt="ethereum"></img>}
        <span className="ethenum">{numETH}</span>
        <span className="ethh">{typeETH}</span>
    <StyledButton 
        percent = {percent}
        children ={children}
    >
        { percent && <img src={ percent < 0 ? redArrow : greenArrow} alt="arrow" />}
        {Math.abs(percent)}%
    </StyledButton>
    </Proper>
    
    );
}