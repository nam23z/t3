import React from "react";
import { styled } from "styled-components";
import Creatore from "./Creatore";
import Avt2 from '../../assets/image/avt2.svg'
const TopCreated = styled.div`
    

`
export const TopCreate = () =>{
    return (
        <TopCreated>
            <h5>Top Create</h5><span>See All</span>
            <Creatore num={1} avt={Avt2} name={"Michael"} mail={"@jordan"} >
            </Creatore>
        </TopCreated>
    );
}