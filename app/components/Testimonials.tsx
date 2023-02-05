import {  Box, Stack, Text,  Button, GridItem, } from '@chakra-ui/react';
import NextLink from 'next/link'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'


export default function Testimonials() {
  return (
    <><Stack

      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
        Check Out Panaverse To Find Out More
      </Text>
      <NextLink href='https://pana-dao.vercel.app/' passHref>
        <Button colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}>
          Panaverse
        </Button>
      </NextLink>
      <Box>
        <Text
          as='b'
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'left'}
          maxW={'3xl'}>
          Strategic Partners
        </Text>
      </Box>


    </Stack>
    <Stack align='center' ><Box boxSize='100px' >
      <Link href='https://www.panacloud.ai/'>
      <Image src='https://www.piaic.org/static/media/panacloudLogo.9b5ef574.svg' alt=''></Image>
      </Link>
    </Box>
    <Box boxSize='150px'>
      <Link href='https://www.saylaniwelfare.com/en'>
          <Image src='https://www.piaic.org/static/media/saylaniLogo.c2a52d0a.png' alt=''></Image>
          </Link>
        
        </Box>
          <Text color={'gray.500'} textAlign='left'><a href="https://www.freepik.com/free-vector/network-mesh-wire-digital-technology-background_10136775.htm#query=background&position=3&from_view=keyword">Network Mesh image by starline</a> on Freepik</Text>
    </Stack></>
  );
}