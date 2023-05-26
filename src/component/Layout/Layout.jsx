import { styled } from 'styled-components';
import SideBar from 'component/SideBar';
import Header from 'component/Header';


const StyledLayout = styled.div`
    background-color: #CAEAE6;
    width: 1440px;
    margin: 0 auto;
    .right{
        float: right;
        width: 80%;
    }
    .clear{
        clear: both;
    }
`;

const ContentStyled = styled.div`
    background-color: #CAEAE6;
    padding: 8px 32px;
    margin-top: 124px;
`;

const SideBarStyled = styled.div`
    float: left;
    position: fixed;
    width: 288px;
`

const PrimaryLayout = ({children}) => {
    return (
        <StyledLayout>
            <SideBarStyled>
                <SideBar></SideBar>
            </SideBarStyled>
            <div className='right'>
                <div className="clear"></div>
                <Header></Header>
                <ContentStyled>{children}</ContentStyled>
            </div>
        </StyledLayout>
    );
}

export default PrimaryLayout;