import { styled } from "styled-components";
import {ReactComponent as Clock} from 'assets/image/Clock.svg';
import {ReactComponent as EthBlack} from 'assets/image/EthereumBlack.svg';

const StyledTrendingArt = styled.div`
    background-color: #FFFFFF;
    width: 348px;
    height: 364px;
    border-radius: 16px;
    font-family: 'DM Sans';
    margin-bottom: 20px;
    p{
        font-size: 16px;
    }
    .img{
        position: relative;
        width: 324px;
        height: 196px;
        padding-top: 12px;
        margin-left: 12px;
        background: url(${props => props.imge}) center center / 100% no-repeat;
    }
    .clockArt{
        background-color: rgba(22, 22, 22, 0.16);
        border-radius: 34px;
        width: 100px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        p{
            font-size: 12px;
            color: #FFFFFF;
        }
        Clock{
            width: 16px;
            height: 16px;
        }
        bottom: 16px;
        left: 8px;
    }
    h4{
        font-family: 'DM Sans';
        font-size: 24px;
        margin-top: 10px;
        margin-bottom: 0;
    }
    .ArtL1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        p{
            color: #747475;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
    .ArtL2{
        display: flex;
        align-items: center;
        color: #747475;
        padding: 0 24px;
        img{
            width: 28px;
            height: 28px;
        }
    }
    .EthBlack{
        width: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .numE{
            font-weight: 700;
            color: #000000;
        }
        p{
            font-weight: normal;
        }
    }
`;


const TrendingArt = ({imge,name,likes,avt,email,numETH}) => {
    return(
        <StyledTrendingArt imge={imge}>
            <div className="img">
                <div className="clockArt">
                    <Clock></Clock>
                    <p>12 : 03 : 45</p>
                </div>
            </div>
            <div>
                <div className="ArtL1">
                    <h4>{name}</h4>
                    <p>{likes} Likes</p>
                </div>
                <div className="ArtL2">
                    <img src={avt} alt="avt" />
                    <p>{email}</p>
                </div>
                <div className="ArtL1">
                    <p>Current Bid</p>
                    <div className="EthBlack">
                        <div>
                            <EthBlack></EthBlack>
                        </div>
                        <div>
                            <p className="numE">{numETH}</p>
                        </div>
                        <div>
                            <p>ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledTrendingArt>
    );
}

export default TrendingArt;