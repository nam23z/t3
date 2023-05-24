import { styled } from 'styled-components';
import SideBar from 'component/SideBar';
import Header from 'component/Header';


const StyledLayout = styled.div`
    background-color: #CAEAE6;
    min-height: 100vh;
    .right{
        float: right;
        width: 80%;
    }
`;

const ContentStyled = styled.div`
    background-color: #CAEAE6;
    margin-top: 64px;
    height: 100vh;
`;

const SideBarStyled = styled.div`
    float: left;
    width: 20%;
`

const PrimaryLayout = ({children}) => {
    return (
        <StyledLayout>
            <SideBarStyled>
                <SideBar></SideBar>
            </SideBarStyled>
            <div className='right'>
                <Header></Header>
                <ContentStyled>{children}</ContentStyled>
            </div>
        </StyledLayout>
    );
}

export default PrimaryLayout;