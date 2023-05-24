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
    width: 348px;
    height: 478px;
    background-color: #ffffff;
    border-radius: 16px;
    h5{
        display: inline-block;
        padding-right: 114px;
        font-family: 'DM Sans';
        font-size: 24px;
        line-height: 31px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    span{
    }
`

export const TopCreate = () =>{
    return (
        <TopCreated>
            <h5>Top Create</h5><span>See All</span>
            <Creatore num={1} avt={Avt1} name={"Michael Jordan"} mail={"@jordan_"} >
            </Creatore>
            <Creatore num={2} avt={Avt2} name={"John Tibao"} mail={"@johnti60"} >
            </Creatore>
            <Creatore num={3} avt={Avt3} name={"Teressa"} mail={"@teressa"} >
            </Creatore>
            <Creatore num={4} avt={Avt4} name={"Johan Hawn"} mail={"@j_hawn"} >
            </Creatore>
            <Creatore num={5} avt={Avt5} name={"Maria Alisson"} mail={"@m_alisson"} >
            </Creatore>
            <Creatore num={6} avt={Avt6} name={"Sam Erricson"} mail={"@erricsonsam"} >
            </Creatore>
        </TopCreated>
    );
}