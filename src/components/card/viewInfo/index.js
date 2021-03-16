import { useContext } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import ViewHistoricInfo from "../viewHistoric";
import CityTempFormatter from "./cityTempFormatter";
import {
  CityTemp,
  CityTitle,
  MessageContainer,
  ViewInfoContainer,
} from "./styles";

const ViewInfo = () => {
  const { loading, data, error } = useContext(WeatherContext);
  return (
    <ViewInfoContainer>
      {loading && <MessageContainer>LOADING...</MessageContainer>}

      {data && (
        <>
          <CityTitle>{data.name}</CityTitle>
          <CityTemp>
            Current temp:
            <CityTempFormatter temp={data.main.temp} />
          </CityTemp>
          <ViewHistoricInfo />
        </>
      )}

      {error && (
        <MessageContainer>Hubo un error ... &#x2639;&#xFE0F;</MessageContainer>
      )}
    </ViewInfoContainer>
  );
};

export default ViewInfo;
