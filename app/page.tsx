import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from 'next/image';
import mixdishes from "./mixdishes.png"
import Link from "next/link";


// export default function Home({ searchParams }: { searchParams: { page: string } }) {


export default function Home() {

  return (

    <Container>
      <Heading align="center" as="h1"
        className="pt-3"
        style={{ color: "#A94D25" }}

      >


        Welcome to <strong> Lunchbox delivery </strong> - Home of Home-Cooked Goodness

      </Heading>
      {/* <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />      */}



      <Heading as="h2" mt="3" align="center"
        style={{ color: "#CB6032" }}

      > Pure Homemade </Heading>

      {/* <Grid columns="3" gap="18" rows="repeat(1, 64px)" width="auto" className="mx-4 "> */}

      <Grid columns={{ initial: "1", xs: "2" }} gap="4" width="auto" className='mx-10 ml-20 mt-10 ' >
        {/* <Flex align="center"> */}

        <div>


          <Heading className="mx-4 " wrap="pretty" weight="bold" mb="4"
            style={{

              lineHeight: "1.5",
              letterSpacing: "3",

              color: "#A94D25"

            }}

          >
            From Our Heart to Your Plate
          </Heading>

          <Text weight="medium" mt="3" className="px-8 "

            style={{

              lineHeight: 2,
              // letterSpacing: 1
              justifyContent: "end",

              color: "#674D41"
            }}

          >
            At Lunchbox delivery, we bring you delicious, 100% halal, home-cooked meals made with love, care,
            and tradition. Whether you're craving a comforting biryani, a rich curry, or healthy homemade snacks.
            we’ve got you covered.

          </Text>

        </div>


        <div className=" justify-center, items-center, mx-auto"

          style={{
            width: "300px",
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}>

          <Image src={mixdishes} alt="Home-cooked food"
            width={300}
            height={300}
          />
        </div>


        {/* </Flex> */}

      </Grid>

      <div style={{ textEmphasis: "red" }}>

        <Link href="/api/menu/displayoptions"
          className="hover:bg-yellow-200"
          style={{ color: "red" }}
        > 
            Explore Available Options 
        </Link>
        
      </div>

    </Container>


  );
}
