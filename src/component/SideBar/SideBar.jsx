import { styled } from "styled-components";
import logo from 'assets/image/Logo.svg';
import iconDashboard from 'assets/image/Icon1.svg';
import iconMarket from 'assets/image/Icon2.svg';
import iconActiveBids from 'assets/image/Icon3.svg';
import iconMyportfolio from 'assets/image/Icon4.svg';
import iconWallet from 'assets/image/Icon5.svg';
import iconFavourites from 'assets/image/Icon6.svg';
import iconHistory from 'assets/image/Icon7.svg';
import iconSetting from 'assets/image/Icon8.svg';
import iconLightMode from 'assets/image/Icon9.svg';
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

const NavItem = ({text, path, iconsidebar}) => {
    return (
        <StyledNavItem>
            <img src={iconsidebar} alt="nav-icon"></img>
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
                <NavItem text="Dashboard" path="/" iconsidebar={iconDashboard}></NavItem>
                <NavItem text="Market" path="/" iconsidebar={iconMarket}></NavItem>
                <NavItem text="Active Bids" path="/" iconsidebar={iconActiveBids}></NavItem>
            </div>
            <div className="profile">
                <h4>PROFILE</h4>
                <NavItem text="My Portfolio" path="/" iconsidebar={iconMyportfolio}></NavItem>
                <NavItem text="Wallet" path="/" iconsidebar={iconWallet}></NavItem>
                <NavItem text="Favourites" path="/" iconsidebar={iconFavourites}></NavItem>
                <NavItem text="History" path="/" iconsidebar={iconHistory}></NavItem>
                <NavItem text="Settings" path="/" iconsidebar={iconSetting}></NavItem>
            </div>
            <div className="other">
                <h4>OTHER</h4>
                <NavItem text="Light Mode" path="/" iconsidebar={iconLightMode}></NavItem>
            </div>
        </StyledSideBar>
    )
};

export default SideBar;