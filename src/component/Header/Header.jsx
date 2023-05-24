import { styled } from "styled-components";
import Input from '../../component/Input/index';
import SearchIcon from '../../assets/image/search-normal.svg';
import IconNoti from '../../assets/image/IconNoti.svg';
import MyAvt from '../../assets/image/MyAvt.svg';
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 99;
    width: 100%;
    height: 56px;
`;

const Header = () => {
    return(
        <StyledHeader>
                <Input iconLeft={SearchIcon} width={"461px"} padding={"4px"} bgColor={"white"} widthIpIp={"80%"} widthIconIp={"10%"} content={"Search Item, Collection and Account..."} borderRadius={"35px"}></Input>
            <div>
                <div className="notification"><img src={IconNoti} alt="notification" /></div>
                <div className="avtar"><img src={MyAvt} alt="myavt" /></div>
            </div>
        </StyledHeader>
    );
}

export default Header;