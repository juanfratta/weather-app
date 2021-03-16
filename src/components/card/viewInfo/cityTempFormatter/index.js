const CityTempFormatter = ({ temp }) => {
  const currentTemp = temp ? temp - 273.15 : "";
  return <p style={{ textAlign: "center" }}>{`${currentTemp.toFixed(1)}° `}</p>;
};

export default CityTempFormatter;
