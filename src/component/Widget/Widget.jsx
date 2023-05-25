import { styled } from "styled-components";
import redArrow from '../../assets/image/redArrow.svg';
import greenArrow from '../../assets/image/greenArrow.svg';
import ethereumBlue from '../../assets/image/ethereumBlue.svg'
import Button from "component/Button";

const Proper = styled.div`
    background-color: white;
    border-radius: 12px;
    color: #747475;
    width: 144px;
    height: 147px;
    display: inline-block;
    padding: 10px;
    margin-bottom: 18px;
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

const formatNumber = (number) => new Intl.NumberFormat('en-IN', { minimumSignificantDigits: 3 }).format(number)

export const Widget = ({percent, children, nameETH, numETH, typeETH}) => {
    return (
    <Proper>
        <p className="nam">{nameETH}</p>
        {typeETH !== "ETH" ? "+" : <img className="ethe" src={ethereumBlue} alt="ethereum"></img>}
        <span className="ethenum">{formatNumber(numETH)}</span>
        <span className="ethh">{typeETH}</span>
    <Button 
        percent = {percent}
        width={"100%"}
        height={"46px"}
        boderColor={"#E9E9E9"}
        borderRadius={"12px"}
        bgColor={"white"}
        fontSize={"16px"}
        textColor={"#747475"}
    >
        { percent && <img src={ percent < 0 ? redArrow : greenArrow} alt="arrow" />}
        {Math.abs(percent)}%
    </Button>
    </Proper>
    );
}