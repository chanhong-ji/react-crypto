import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ChartBox = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`;

const ChartLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 3px;
`;

interface IPriceData {
  data: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_15m: number;
        percent_change_30m: number;
        percent_change_1h: number;
        percent_change_6h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
        ath_price: number;
        ath_date: string;
        percent_from_price_ath: number;
      };
    };
  };
}

const Price = () => {
  const { state } = useLocation<IPriceData>();
  const data = state.data;
  const priceData = data?.quotes.USD;
  return (
    <div>
      <ChartBox>
        <ChartLine>
          <span>Rank</span>
          <span>{data?.rank}</span>
        </ChartLine>
        <ChartLine>
          <span>Total Supply</span>
          <span>{data?.total_supply}</span>
        </ChartLine>
        <ChartLine>
          <span>Price</span>
          <span>{priceData?.price}</span>
        </ChartLine>
        <ChartLine>
          <span>Market Cap</span>
          <span>{priceData?.market_cap}</span>
        </ChartLine>
        <ChartLine>
          <span>Ath Date</span>
          <span>{priceData?.ath_date}</span>
        </ChartLine>
        <ChartLine>
          <span>Ath Price</span>
          <span>{priceData?.ath_price}</span>
        </ChartLine>
      </ChartBox>
    </div>
  );
};

export default Price;
