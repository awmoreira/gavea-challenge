import React from "react";

import Spinner from "~/components/Spinner";
import Colors from "~/theme/colors";

import { Container } from "./styles";

const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <Spinner size="large" color={Colors.blackBlue} />
    </Container>
  );
};

export default LoadingScreen;