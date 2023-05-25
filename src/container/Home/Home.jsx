import { Widget } from 'component/Widget/Widget';
import { TopCreate } from 'component/TopCreate/TopCreate';
import PrimaryLayout from 'component/Layout';
import { styled } from 'styled-components';
import Button from 'component/Button';
import bgBanner from 'assets/image/bgBanner.svg';
const StyledHome = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    width: 100%;
    text-align: center;
`;

const StyledBannerA = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const StyledBannerAA = styled.div`
    background: url(${props => props.imge}) center center/ 100% no-repeat;
    width: 716px;
    height: 354px;
    h1{
        color: #FFFFFF;
        font-family: 'Epilogue';
        font-size: 54px;
    }
`;
const StyledButtonBanner = styled.div`
    
`;

const StyledWidgett = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 348px;
`;
const fakedatawidget = [
    {
        title: "Revenue",
        percent: 12.3,
        type: "ETH",
        number: 5.00
    },
    {
        title: "Spending",
        percent: 8.1,
        type: "ETH",
        number: 2.00
    },
    {
        title: "ROI",
        percent: -5.1,
        type: "%",
        number: 14.02
    },
    {
        title: "Estimated",
        percent: 3.2,
        type: "ETH",
        number: 7.00
    },
]
const BannerA = ({imge}) => {
    return(
        <StyledBannerA>
                <StyledBannerAA imge={imge}>
                    <h1>Discover, Create and Sell Your Own NFT.</h1>
                    <StyledButtonBanner>
                        <Button
                            bgColor={"#FFFFFF"}
                            textColor={"#5429FF"}
                            fontSize={"16px"}
                            fontFami={"DM Sans"}
                        >
                            Discover
                        </Button>
                        <Button
                            bgColor={"transparent"}
                            textColor={"#FFFFFF"}
                            boderColor={"#FFFFFF"}
                        >
                            Create
                        </Button>
                    </StyledButtonBanner>
                </StyledBannerAA>
                <StyledWidgett>
                    {fakedatawidget.map((item)=>{return <Widget percent={item.percent} nameETH={item.title} typeETH={item.type} numETH={item.number}></Widget>})}
                </StyledWidgett>
        </StyledBannerA>
    );
}
const Home = () => {
    return (
        <PrimaryLayout>
            <StyledHome>
                <BannerA imge={bgBanner}></BannerA>
                <TopCreate></TopCreate>
            </StyledHome>
        </PrimaryLayout>
    );
}

export default Home;