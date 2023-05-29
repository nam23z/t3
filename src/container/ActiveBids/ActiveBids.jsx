import React from "react";
import PrimaryLayout from "component/Layout";
import { styled } from "styled-components";
const StyledActiveBids = styled.div`
    height: 100vh;
`
const ActiveBids = () => {
    return(
        <PrimaryLayout>
            <StyledActiveBids>
                <h1>Active Bids</h1>
                <p>Description of Active Bids Page</p>
            </StyledActiveBids>
        </PrimaryLayout>
    );
}
export default ActiveBids;