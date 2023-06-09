import { styled } from "styled-components";
import Logo from "component/Logo/index";
import { ReactComponent as IconDashboard} from 'assets/image/Icon1.svg';
import { ReactComponent as IconMarket} from 'assets/image/Icon2.svg';
import { ReactComponent as IconActiveBids} from 'assets/image/Icon3.svg';
import { ReactComponent as IconMyportfolio} from 'assets/image/Icon4.svg';
import { ReactComponent as IconWallet} from 'assets/image/Icon5.svg';
import { ReactComponent as IconFavourites} from 'assets/image/Icon6.svg';
import { ReactComponent as IconHistory} from 'assets/image/Icon7.svg';
import { ReactComponent as IconSetting} from 'assets/image/Icon8.svg';
import { ReactComponent as IconLightMode} from 'assets/image/Icon9.svg';
import iconSun from 'assets/image/sun.svg';
import iconMoon from 'assets/image/moon.svg';
import ethereumLarge from 'assets/image/EthereumLarge.svg';
import ethereumBlack from 'assets/image/EthereumBlack.svg';
import arrowRight from 'assets/image/arrow-right.svg';
import  add from 'assets/image/add.svg';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledSideBar = styled.div`
    background-color: white;
    height: 100vh;
    padding: 32px;
    .light .toggle .ball {
        background-color: #CAEAE6;
        transform: translateX(-12px);
    }
    .dark .toggle .ball{
        background-color: #151d2a;
        transition: 0.3s;
        transform: translateX(12px);
    }
    .active {
        svg {
            stroke: #f30ee4;
            fill: #f30ee4;
        path {
            stroke: #f30ee4;
        }  
    }
    color: #f30ee4;
  }
`;

const StyledNavItem = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: #7A797D;
    margin-bottom: 25px;
    a{
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: unset;
        color: #7A797D;
    }
    .iconSideBar{
        
    }
`;

const LightSwitch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

const Switch2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 56px;
    height: 30px;
    .toggle{
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 22px;
        border-radius: 25px;
        padding: 4px;
        cursor: pointer;
        background: linear-gradient(145deg, #e1e1e1, #fff);
        box-shadow: 3px 3px 4px #e6e6e6, -3px -3px 4px #fff;
    }
    .checkbox{
        display: none;
    }
    .icon{
        width: 14px;
        z-index: 1;
    }
`;
const Ball = styled.span`
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #AE9AFF;
    transition: 0.3s;
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
const NavItem = ({text, path, children}) => {
    return (
        <StyledNavItem>
                <NavLink to={path} className={"iconSideBar"} >{children}<span>{text}</span></NavLink>
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
};

const SideBar = () => {

    const[toggle, setToggle] = useState("light");
    const onChangeToggle = (coook) => {
        if(coook.target.checked)
        setToggle("light")
        else{
            setToggle("dark")
        }
    }
    // const onDark = () => {
    //     setToggle();
    // }
    return (
        <StyledSideBar>
            <Logo></Logo>
            <div className="nav">
                <NavItem text="Dashboard" path="/"><IconDashboard></IconDashboard></NavItem>
                <NavItem text="Login" path="/login" ><IconMarket></IconMarket></NavItem>
                <NavItem text="Active Bids" path="/activeBids"><IconActiveBids></IconActiveBids></NavItem>
            </div>
            <div className="profile">
                <h4>PROFILE</h4>
                <NavItem text="My Portfolio" path="/a"><IconMyportfolio></IconMyportfolio></NavItem>
                <NavItem text="Wallet" path="/b"><IconWallet></IconWallet></NavItem>
                <NavItem text="Favourites" path="/c"><IconFavourites></IconFavourites></NavItem>
                <NavItem text="History" path="/d"><IconHistory></IconHistory></NavItem>
                <NavItem text="Settings" path="/e"><IconSetting></IconSetting></NavItem>
            </div>
            <div className="other">
                <h4>OTHER</h4>
                <LightSwitch>
                    <NavItem text="Light Mode" path="/f"><IconLightMode></IconLightMode></NavItem>
                    <Switch2 className={toggle}>
                        <input onChange={onChangeToggle} type="checkbox" className="checkbox" id="toggle" />
                        <label for="toggle" className="toggle">
                            <img src={iconSun} alt="sun" className="icon" />
                            <img src={iconMoon} alt="moon" className="icon" />
                            <Ball className="ball"></Ball>
                        </label>
                    </Switch2>
                </LightSwitch>
            </div>
            <Balance numETH={"1,034.02"}></Balance>
        </StyledSideBar>
    )
};

export default SideBar;