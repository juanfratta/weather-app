import { useContext } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import { CityTemp, CityTitle, ViewInfoContainer } from "./styles";

const ViewInfo = () => {
  const { loading, data, error } = useContext(WeatherContext);
  return (
    <ViewInfoContainer>
      {loading && <div>LOADING...</div>}
      {data && (
        <>
          <CityTitle>{data.name}</CityTitle>
          <CityTemp>{data.main.temp}</CityTemp>
        </>
      )}
      {error && <div>ERROR...</div>}
    </ViewInfoContainer>
  );
};

export default ViewInfo;
