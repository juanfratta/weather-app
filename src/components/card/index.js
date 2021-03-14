import Form from "./form";
import ViewInfo from "./viewInfo";

import { CardContainer } from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ViewInfo />
      <Form />
    </CardContainer>
  );
};

export default Card;
