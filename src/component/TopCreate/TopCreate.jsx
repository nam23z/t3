import React from "react";
import { styled } from "styled-components";
import Creatore from "./Creatore";
import Avt1 from '../../assets/image/avt1.svg';
import Avt2 from '../../assets/image/avt2.svg';
import Avt3 from '../../assets/image/avt3.svg';
import Avt4 from '../../assets/image/avt4.svg';
import Avt5 from '../../assets/image/avt5.svg';
import Avt6 from '../../assets/image/avt6.svg';
const TopCreated = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    width: 300px;
    height: 478px;
    background-color: #ffffff;
    border-radius: 16px;
    .topCreate{
        display: flex;
        justify-content: space-between;
    }
    h5{
        display: inline-block;
        font-family: 'DM Sans';
        font-size: 24px;
        line-height: 31px;
        font-weight: 700;
        margin-top: 24px;
        margin-bottom: 20px;
    }
    span{
        color: #747475;
        font-family: 'DM Sans';
        font-size: 16px;
        margin-top: 32px;
    }
`
const fakedatatopcreate = [
    {
        id: 1,
        avt: Avt1,
        name: "Michael Jordan",
        email: "@jordan_"
    },
    {
        id: 2,
        avt: Avt2,
        name: "John Tibao",
        email: "@johnti60"
    },
    {
        id: 3,
        avt: Avt3,
        name: "Teressa",
        email: "@teressa"
    },
    {
        id: 4,
        avt: Avt4,
        name: "Johan Hawn",
        email: "@j_hawn"
    },
    {
        id: 5,
        avt: Avt5,
        name: "Maria Alisson",
        email: "@m_alisson"
    },
    {
        id: 6,
        avt: Avt6,
        name: "Sam Erricson",
        email: "@erricsonsam"
    }
]
export const TopCreate = () =>{
    return (
        <TopCreated>
            <div className="topCreate"><h5>Top Create</h5><span>See All</span></div>
            {fakedatatopcreate.map((item)=>{return <Creatore num={item.id} avt={item.avt} name={item.name} mail={item.email}></Creatore>})}
        </TopCreated>
    );
}