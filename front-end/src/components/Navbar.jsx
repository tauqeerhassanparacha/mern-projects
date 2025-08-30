import {
  Button,
  Container,
  Flex,
  Text,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaGratipay, FaSquarePlus } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          fontWeight={"bold"}
        >
          <Link to={"/"}>Product Store 👜</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <CiSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
