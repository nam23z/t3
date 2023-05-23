import React from "react";
import { styled } from "styled-components";

const StyledCreator = styled.div`

    
`

const Butt = styled.button`
    
`
const Creatore = ({num, avt, name, mail}) => {
    return (
        <StyledCreator>
            <div>
                <div>{name}</div>
                <div >{mail}</div>
            </div>
            <div>
                <Butt>Follow</Butt>
            </div>

        </StyledCreator>
    );
}
export default Creatore;