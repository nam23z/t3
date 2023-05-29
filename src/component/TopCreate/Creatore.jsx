import React from "react";
import { styled } from "styled-components";
import Button from "component/Button";
import { useState } from "react";

const StyledCreator = styled.div`
    display: flex;
    justify-content: space-between;
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
    .following{
        background-color: #5429FF;
        color: #FFFFFF;
    }
`
const Creatore = ({num, avt, name, mail}) => {
    const[follow, setFollow] = useState("notfollow");
    const onFollow = (fl) =>{
        if(fl.value === "following"){
            setFollow("notfollow")
        }else{
            setFollow("following")
        }
    }
    return (
        <StyledCreator>
                <div>{num}.</div>
                <div><img src={avt} alt="avt" /></div>
                <div className="namem">
                    <div>{name}</div>
                    <div className="mail">{mail}</div>
                </div>
            <div>
                <Button
                    bgColor={"rgba(84, 41, 255, 0.1)"}
                    fontSize={"12px"}
                    width={"77px"}
                    height={"32px"}
                    onClick={onFollow}
                    className={follow}
                    follow={follow}
                >
                    {follow}
                </Button>
            </div>
        </StyledCreator>
    );
}
export default Creatore;