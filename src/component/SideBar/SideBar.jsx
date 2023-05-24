import { styled } from "styled-components";
import logo from 'assets/image/Logo.svg';
import iconDashboard from 'assets/image/Icon1.svg';
// import iconMarket from 'assets/image/Icon2.svg';
// import iconActiveBids from 'assets/image/Icon3.svg';
import { NavLink } from "react-router-dom";

const StyledSideBar = styled.div`
    background-color: white;
    height: 100vh;
    padding: 32px;
    .logo{
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 54px;
    }
    .logo-text {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: #27262E;
    }
    .logo-desc{
        font-size: 10px;
        line-height: 13px;
        color: #7A797D;
    }
`;

const StyledNavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: #7A797D;
    margin-bottom: 25px;
    a{
        text-decoration: unset;
        color: #7A797D;
    }
`;

const NavItem = ({text, path}) => {
    return (
        <StyledNavItem>
            <img src={iconDashboard} alt="nav-icon"></img>
            <NavLink to={path}>{text}</NavLink>
        </StyledNavItem>
    )
}

const SideBar = () => {
    return (
        <StyledSideBar>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                    <div className="logo-text">MyNFT</div>
                    <div className="logo-desc">NFT Marketplace</div>
                </div>
            </div>
            <div className="nav">
                <NavItem text="Dashboard" path="/"></NavItem>
            </div>
        </StyledSideBar>
    )
};

export default SideBar;