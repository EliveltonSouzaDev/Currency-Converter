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
          width: "25%",
          top: "32%",
          left: "860px",
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
