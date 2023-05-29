import React from "react";
import PrimaryLayout from "component/Layout";
import { styled } from "styled-components";
const StyledAbout = styled.div`
    height: 100vh;
`
const About = () => {
    return(
        <PrimaryLayout>
            <StyledAbout>
                <h1>About Page</h1>
                <p>Description of About Page</p>
            </StyledAbout>
        </PrimaryLayout>
    );
}
export default About;