import { Box, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import people from './reviewsdata';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import '../App.scss';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, location, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Box
      w='100%'
      position='sticky'
      bg='#faf9f6'
      p='4rem'
      alignItems='center'
      justifyContent='center'
      id='reviews-section'
      gap='0'
    >
      <HStack justifyContent='space-between' alignItems='center' gap='0'>
        <Button
          size='lg'
          bg='#FFCE00'
          borderColor='#FFCE00'
          borderRadius={'3.125rem'}
          color='#000106'
          fontSize='1.25rem'
          p='0.625rem'
          justifyContent='center'
          alignItems='center'
          onClick={prevPerson}
          _hover={{
            background: '#faf9f6',
            color: '#FFCE00',
            border: '2px solid #FFCE00',
          }}
        >
          <FaArrowLeft />
        </Button>
        <VStack maxW='65%' gap='0'>
          <HStack maxW='8rem'>
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
          </HStack>
          <Text py='2rem' textAlign='center'>
            {text}
          </Text>
          <Text fontWeight='700'>{name}</Text>
          <Text className='location' fontWeight='600'>
            {location}
          </Text>
        </VStack>
        <Button
          size='lg'
          bg='#FFCE00'
          borderColor='#FFCE00'
          borderRadius={'3.125rem'}
          color='#000106'
          fontSize='1.25rem'
          p='0.625rem'
          justifyContent='center'
          alignItems='center'
          onClick={nextPerson}
          _hover={{
            background: '#faf9f6',
            color: '#FFCE00',
            border: '2px solid #FFCE00',
          }}
        >
          <FaArrowRight />
        </Button>
      </HStack>
    </Box>
  );
};

export default Reviews;
