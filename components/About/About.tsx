import { Show, Hide } from "@chakra-ui/react";
import { Text, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { useToast } from "@chakra-ui/react";

const divAnimate = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const funFacts = [
  "I slept an average of 3 hours this week",
  "This code needs refactoring :/",
  "I love eating cough lozenges",
  "I have 5 CCAs",
  "I eat cereal twice a day",
];

const Bio =
  "Hi! I'm JieQi, a Year 1 Computer Science undergraduate at the National University of Singapore. Beyond making tools to convenience my daily life, I like learning about and making cool things! In particular, Fintech interests me not only because of its importance, but because it is a domain that still has a lot of possibilities for innovation!";

const About = () => {
  const toast = useToast();

  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      justify="center"
      align="center"
      bg="papayawhip"
    >
      <motion.div
        whileInView={divAnimate.onscreen}
        viewport={{ once: false }}
        initial={divAnimate.offscreen}
      >
        <Grid
          w={["90vw", "70vw", "70vw"]}
          h="80vh"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={[6, 6, 8]}
        >
          <GridItem
            colStart={[2, 2, 1]}
            colSpan={1}
            rowStart={[3, 3, 1]}
            rowSpan={1}
            bg="#c6e2ff"
            className="clickAble"
            onClick={() => {
              toast({
                title: "Check it out at:",
                description: "t.me/internSGScraperBot",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }}
          >
            <Text
              fontWeight="extraBold"
              fontSize={["2xl", "3xl", "6xl"]}
              padding="1"
            >
              Bots
            </Text>
          </GridItem>

          <GridItem
            colStart={[3, 3, 2]}
            colSpan={1}
            rowStart={[3, 3, 1]}
            rowSpan={1}
            bg="#c6e2ff"
            className="clickAble"
            onClick={() => {
              toast({
                title: "Check it out at",
                description: "node-auth-frontend-netlify.herokuapp.com/",
                status: "warning",
                duration: 5000,
                isClosable: true,
              });
            }}
          >
            <Text
              fontWeight="extraBold"
              fontSize={["2xl", "3xl", "6xl"]}
              padding="1"
            >
              MERN Page
            </Text>
          </GridItem>

          <GridItem
            colStart={[1, 1, 3]}
            colSpan={1}
            rowStart={1}
            rowSpan={1}
            bg="#c6e2ff"
            className="clickAble"
          >
            <Text
              fontWeight="bold"
              fontSize={["2xl", "3xl", "6xl"]}
              padding="1"
              onClick={() => {
                toast({
                  title: "whoops",
                  description: "I haven't added this yet :/",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              }}
            >
              Resume
            </Text>
          </GridItem>

          <GridItem
            colSpan={1}
            rowStart={[3, 3, 2]}
            rowSpan={[1, 1, 2]}
            bg="#c6e2ff"
            className="clickAble"
            onClick={() => {
              const idx: number = Math.floor(Math.random() * 5);
              const fact: string = funFacts[idx];
              const stridx: number = idx + 1;
              
              toast({
                title: "Fun Fact #" + stridx,
                description: fact,
                status: "info",
                duration: 5000,
                isClosable: true,
              });
            }}
          >
            <Text
              fontWeight="bold"
              fontSize={["2xl", "3xl", "6xl"]}
              padding="1"
            >
              Funfacts
            </Text>
          </GridItem>

          <GridItem
            colStart={[1, 1, 2]}
            colSpan={[3, 3, 2]}
            rowStart={[1, 1, 2]}
            rowSpan={2}
            bg="#c6e2ff"
          >
            <Text
              fontWeight="bold"
              fontSize={["4xl", "4xl", "6xl"]}
              padding="1"
            >
              About
            </Text>
            <Text
              fontWeight="semibold"
              lineHeight="8"
              fontSize={["md", "md", "large"]}
              padding="5"
            >
              {Bio}
            </Text>
          </GridItem>
        </Grid>
      </motion.div>
    </Flex>
  );
};

export default About;
