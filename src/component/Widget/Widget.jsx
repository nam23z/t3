import { styled } from "styled-components";
import redArrow from '../../assets/image/redArrow.svg';
import greenArrow from '../../assets/image/greenArrow.svg';
import ethereumBlue from '../../assets/image/ethereumBlue.svg'
import Button from "component/Button";

// const StyledButton = styled.button`
//     width: 100%;
//     height: 46px;
//     border: 1px solid #E9E9E9;
//     border-radius: 12px;
//     background-color: white;
//     font-size: 16px;
//     line-height: 21px;
//     display: block;
//     margin: 0 auto;
// `
const Proper = styled.div`
    background-color: white;
    border-radius: 12px;
    color: #747475;
    width: 164px;
    display: inline-block;
    margin: 20px 0;
    padding: 10px;
    .nam{
        font-size: 14px;
        text-align: left;
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

export const Widget = ({percent, children, nameETH, numETH, typeETH}) => {
    return (
    <Proper>
        <p className="nam">{nameETH}</p>
        {typeETH !== "ETH" ? "+" : <img className="ethe" src={ethereumBlue} alt="ethereum"></img>}
        <span className="ethenum">{numETH}</span>
        <span className="ethh">{typeETH}</span>
    <Button 
        percent = {percent}
        width={"100%"}
        height={"46px"}
        boderColor={"#E9E9E9"}
        borderRadius={"12px"}
        bgColor={"white"}
        fontSize={"16px"}
    >
        { percent && <img src={ percent < 0 ? redArrow : greenArrow} alt="arrow" />}
        {Math.abs(percent)}%
    </Button>
    </Proper>
    );
}