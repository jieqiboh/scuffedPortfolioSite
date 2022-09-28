import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Show, Hide } from "@chakra-ui/react";
import { Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/Index/NavBar";
import About from "../components/About/About";
import { Icon } from "@chakra-ui/react"; //icons
import { MdOutlineTagFaces } from "react-icons/md";

const Home: NextPage = () => {
  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        direction="column"
        justify="center"
        align="center"
      >
        <Grid
          w={["90vw", "50vw", "50vw"]}
          h="50vh"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem colStart={0} colSpan={[4, 4, 2]} bg="papayawhip">
            <Text fontWeight="extraBold" fontSize="8xl" padding="1">
              Hi,
            </Text>
          </GridItem>
          <GridItem colStart={0} colSpan={2} bg="papayawhip">
            <Text fontWeight="bold" fontSize="4xl" padding="1">
              I'm jieqi
            </Text>
          </GridItem>
          <GridItem
            colStart={0}
            colSpan={2}
            bg={["tomato", "tomato", "papayawhip"]}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <NavBar></NavBar>
          </GridItem>
          <Show above="md">
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
              colStart={3}
              rowStart={1}
              rowSpan={3}
              bg="tomato"
            >
              <Icon as={MdOutlineTagFaces} w={60} h={60} />
            </GridItem>
          </Show>
        </Grid>
      </Flex>
      <About></About>
    </>
  );
};

export default Home;
