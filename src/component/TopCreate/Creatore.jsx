import React from "react";
import { styled } from "styled-components";
import Button from "component/Button";

const StyledCreator = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    margin-bottom: 16px;
    .namem{
        width: 108px;
        text-align: left;
    }
    .mail{
        color: #747475;
        font-size: 12px;
        line-height: 16px;
    }
`
const Creatore = ({num, avt, name, mail}) => {
    return (
        <StyledCreator>
                <div>{num}.</div>
                <div><img src={avt} alt="avt" /></div>
                <div className="namem">
                    <div>{name}</div>
                    <div className="mail">{mail}</div>
                </div>
            <div>
                <Button>Follow</Button>
            </div>
        </StyledCreator>
    );
}
export default Creatore;