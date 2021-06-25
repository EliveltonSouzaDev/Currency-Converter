import React from "react";

//image
import ElipseImg from "../../Images/Elipse.png";

//rebass
import { Flex, Image } from "rebass";

const Elipse = () => {
  return (
    <Flex justifyContent="flex-end" position="absolute">
      <Image
        src={ElipseImg}
        alt=""
        sx={{
          width: "20%",
          top: "25%",
          left: "60%",
          position: "absolute",
          opacity: "0.8",
          "@media screen and (max-width: 768px)": {
            display: "none",
          },
        }}
      />
    </Flex>
  );
};

export default Elipse;
