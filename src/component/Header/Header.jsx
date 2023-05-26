import { styled } from "styled-components";
import Input from '../../component/Input/index';
import SearchIcon from '../../assets/image/search-normal.svg';
import IconNoti from '../../assets/image/IconNoti.svg';
import MyAvt from '../../assets/image/MyAvt.svg';
const StyledHeader = styled.div`
    background-color: #CAEAE6;
    display: flex;
    justify-content: space-between;
    z-index: 99;
    padding: 32px;
    position: fixed;
    width: 1088px;
    .RightHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 140px;
    }
    .notification{
        background-color: #ffffff;
        padding: 15px 16px 13px;
        border-radius: 50%;
        margin-bottom: 4px;
    }
    .notification img{
        display: inline-block;
    }
    .avtar{
        text-align: center;
    }
`;

const Header = () => {
    return(
        <StyledHeader>
                <Input iconLeft={SearchIcon} width={"461px"} padding={"4px"} bgColor={"white"} widthIpIp={"80%"} widthIconIp={"10%"} content={"Search Item, Collection and Account..."} borderRadius={"35px"}></Input>
            <div className="RightHeader">
                <div className="notification"><img src={IconNoti} alt="notification" /></div>
                <div className="avtar"><img src={MyAvt} alt="myavt" /></div>
            </div>
        </StyledHeader>
    );
}

export default Header;