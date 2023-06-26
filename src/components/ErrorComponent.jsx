import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom  ={"4"}
      left={"50%" }
          transform={"translateX(-50%)"}
      w={"full"}
      justifyContent={"center"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;