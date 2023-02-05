import Head from 'next/head';
import NextLink from 'next/link'
import { Image, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon,
  Link,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <>
      <Head>
        
        <Link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"/>
      </Head>
      <Grid
  h='520px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  //bg='#E8E2E2'
  backgroundImage="url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1480&t=st=1675588493~exp=1675589093~hmac=43a169fefe039974eec1136cb1ed925ed79db5e0534b77620e4d89c01100f308')"
   backgroundPosition="left"
  backgroundRepeat="no-repeat"
 
>
  
<GridItem colSpan={2}><Box boxSize='sm'> 
         <Image src='https://www.piaic.org/static/media/president-png.5b5f05c1.png' alt='' />
        </Box></GridItem>
<GridItem colSpan={2}>
         <Box
         boxSize='100px'></Box>     
        <Box ><Heading
            fontWeight={600}
            fontSize={{ base: '10', sm: 'xl', md: '5xl' }}
            lineHeight={'150%'}
            textAlign= 'center'>
            Presidential Initiative
            <br></br>
            <Text as={'span'} color={'green.400'}>
              for Artificial Intelligence & Computing (PIAIC)
            </Text>
          </Heading></Box>
          </GridItem>
       </Grid>
      <Container maxW={'3xl'}>
        
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          
          <Text color={'gray.500'}>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. 
            Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <NextLink href='https://portal.piaic.org/signup' passHref>
              <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Apply
            </Button>
            </NextLink>
            
          </Stack>
        </Stack>
      </Container>
      <Stack>
             
<Grid
  h='500px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(6, 1fr)'  
  gap={4}
>
<GridItem colSpan={6} rowSpan={1}>
  <Box>
    <Heading
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '4xl' }}
            lineHeight={'110%'}
            textAlign= 'center'>
            Available Programs   
          </Heading>
  </Box>
</GridItem>
<GridItem></GridItem>
<GridItem boxShadow='lg'>
  <NextLink href='https://www.piaic.org/artificial-inteligence'>
  <Box  width='50' height={10} bgColor={'#6096B4'} ></Box>
          <Box  width='50' height={10} ></Box>
        <Heading 
            textColor={'#6096B4'}
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '2xl' }}
            lineHeight={'110%'}
            textAlign= 'center'>
            Artificial Intelligence  
          </Heading>
          </NextLink>
</GridItem>
<GridItem boxShadow='lg'>
  <NextLink href='https://www.piaic.org/cloud-native'>
  <Box  width='50' height={10} bgColor={'#7286D3'}></Box >
          <Box  width='50' height={10}></Box>
        <Heading
         textColor={'#7286D3'}
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '2xl' }}
            lineHeight={'110%'}
            textAlign= 'center'>
           Cloud and Native Mobile Web  
          </Heading>
          </NextLink></GridItem>
<GridItem boxShadow='lg'>
  <NextLink href='https://www.piaic.org/block-chain'>
  <Box  width='50' height={10} bgColor={'#E5E0FF'}></Box>
          <Box  width='50' height={10}></Box>
        <Heading
         textColor={'#E5E0FF'}
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '2xl' }}
            lineHeight={'110%'}
            textAlign= 'center'>
            BlockChain  
          </Heading>
          </NextLink></GridItem>
<GridItem boxShadow='lg'>
  <NextLink href='https://www.piaic.org/iot'>
  <Box  width='50' height={10} bgColor={'#F8CBA6'}></Box>
          <Box  width='50' height={10}></Box>
        <Heading
         textColor={'#F8CBA6'}
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '2xl' }}
            lineHeight={'110%'}
            textAlign= 'center'>
           Internet of Things and AI 
          </Heading> 
          </NextLink>
          </GridItem>

</Grid>
      
  <Grid
  h='2000px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  bg='#1F8A70'
  gap={4}
>
<GridItem colSpan={2}>
  <Box>
    <Heading
            fontWeight={600}
            fontSize={{ base: '10', sm: '2xl', md: '8xl' }}
            lineHeight={'200%'}
            textAlign= 'center'>
            Images   
          </Heading>
  </Box>
</GridItem>
<GridItem colSpan={2}></GridItem>
<GridItem colSpan={1} colEnd={2}></GridItem>
  <GridItem colSpan={3} >
    <Box><Image src='https://www.piaic.org/static/media/Launching-site-image2.c147d1bb.jpg' alt='' /></Box>
  </GridItem>
  
  <GridItem colSpan={2}></GridItem>
<GridItem colSpan={1} colEnd={2}></GridItem>
  <GridItem colSpan={3} >
    <Box><Image src='https://www.piaic.org/static/media/Launching-site-image1.2f88fa1a.jpg' alt='' /></Box>
  </GridItem>
  
  <GridItem colSpan={2}></GridItem>
<GridItem colSpan={1} colEnd={2}></GridItem>
  <GridItem colSpan={3}>
    <Box><Image src='https://www.piaic.org/static/media/Launching-site-image3.d4d5dfcb.jpg' alt='' /></Box>
  </GridItem>

</Grid>
      </Stack>
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});