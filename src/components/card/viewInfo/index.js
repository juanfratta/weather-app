import { CityTemp, CityTitle, ViewInfoContainer } from "./styles";

const ViewInfo = () => {
  return (
    <ViewInfoContainer>
      <CityTitle>Buenos Aires</CityTitle>
      <CityTemp>25°</CityTemp>
    </ViewInfoContainer>
  );
};

export default ViewInfo;
