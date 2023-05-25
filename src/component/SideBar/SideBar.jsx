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
import iconSun from 'assets/image/sun.svg';
import iconMoon from 'assets/image/moon.svg';
import ethereumLarge from 'assets/image/EthereumLarge.svg';
import ethereumBlack from 'assets/image/EthereumBlack.svg';
import arrowRight from 'assets/image/arrow-right.svg';
import add from 'assets/image/add.svg';
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

const LightSwitch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

const Switch = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 56px;
    height: 30px;
    .toggle{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-height: 34px;
        border-radius: 25px;
        cursor: pointer;
        background: linear-gradient(145deg, #e1e1e1, #fff);
        box-shadow: 3px 3px 4px #e6e6e6, -3px -3px 4px #fff;
    }
    .checkbox{
        display: none;
    }
    .icon{
        width: 46%;
        z-index: 1;
    }
`;
const Ball = styled.span`
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #AE9AFF;
`;

const StyledBalance = styled.div`
    position: relative;
    font-family: 'DM Sans';
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 228px;
    height: 220px;
    border-radius: 16px;
    background-image: linear-gradient(225deg, #5429FF 0%, #BBAAFF 100%);
    margin: 0 auto;
    margin-top: 20px;
    .titleBalan{
        color: #E0DEE5;
        font-size: 12px;
    }
    .numEth{
        font-family: 'DM Sans';
        font-size: 30px;
        color: #FFFFFF;
    }
    .ethBlack{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50px;
    }
    .ethBlackIcon{
        text-align: center;
        width: 12px;
        background-color: #E0DEE5;
        border-radius: 50%;
        padding: 0 4px;
    }
    .ethSize{
        color: #FFFFFF;
        font-size: 12px;
    }
    .topUp{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: 164px;
        background-color: #FFFFFF;
        border-radius: 12px;
        padding: 14px 16px;
        font-size: 14px;
        font-family: 'DM Sans';
        color: white;
        z-index: 99;
    }
    .plusTopUp{
        background-color: #5429FF;
        border-radius: 50%;
        text-align: center;
        padding: 4px;
        width: 20px;
    }
    .topUpBalan{
        color: #27262E;
    }
    .ethereumLarge{
        position: absolute;
        left: 6%;
        top: 16%;
        z-index: 1;
    }
`
const NavItem = ({text, path, iconsidebar}) => {
    return (
        <StyledNavItem>
            <img src={iconsidebar} alt="nav-icon"></img>
            <NavLink to={path}>{text}</NavLink>
        </StyledNavItem>
    )
}

const Balance = ({numETH}) => {
    return (
        <StyledBalance>
            <div className="ethereumLarge"><img src={ethereumLarge} alt="ethereumLarge" /></div>
            <div className="titleBalan">Your Balance</div>
            <div className="numEth">{numETH}</div>
            <div className="ethBlack">
                <div className="ethBlackIcon"><img src={ethereumBlack} alt="ethereumBlack" /></div>
                <div className="ethSize">ETH</div>
            </div>
            <div className="topUp">
                <div className="plusTopUp"><img src={add} alt="add" /></div>
                <div className="topUpBalan">Top Up Balance</div>
                <div><img src={arrowRight} alt="arrowRight" /></div>
            </div>
        </StyledBalance>
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
                <LightSwitch>
                    <NavItem text="Light Mode" path="/" iconsidebar={iconLightMode}></NavItem>
                    <Switch>
                        <input type="checkbox" className="checkbox" id="toggle" />
                        <label className="toggle">
                            <img src={iconSun} alt="sun" className="icon" />
                            <img src={iconMoon} alt="moon" className="icon" />
                            <Ball></Ball>
                        </label>
                    </Switch>
                </LightSwitch>
            </div>
            <Balance numETH={"1,034.02"}></Balance>
        </StyledSideBar>
    )
};

export default SideBar;