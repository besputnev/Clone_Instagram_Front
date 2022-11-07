import { Box, HStack } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Stories from "../components/Stories";

type Data = {
  id: number;
  picture: string;
  name: string;
};

const Home = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box
        w={500}
        h={105}
        m="auto"
        pl={5}
        pr={5}
        display="flex"
        justifyContent="center"
        border="1px solid #d6d6d6"
        borderRadius={10}
      >
        <HStack
          overflow="auto"
          spacing={2}
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
              color: "black",
            },
          }}
        >
          {results &&
            results?.map((data: { id: any }) => {
              return <Stories key={data.id} data={data} />;
            })}
        </HStack>
      </Box>
      <Feed />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`https://randomuser.me/api/?results=20`);
  const { results }: Data[] = await response.json();
  return {
    props: { results },
  };
}

export default Home;
