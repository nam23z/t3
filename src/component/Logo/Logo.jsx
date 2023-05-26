import { styled } from "styled-components";
import logo from 'assets/image/Logo.svg';
const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
    img{
        width: 56px;
        height: 56px;
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
`
const Logo = () => {
    return(
        <StyledLogo>
            <img src={logo} alt="logo"/>
            <div>
                <div className="logo-text">MyNFT</div>
                <div className="logo-desc">NFT Marketplace</div>
            </div>
        </StyledLogo>
    )
}

export default Logo;