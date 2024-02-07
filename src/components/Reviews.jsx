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

  const textStyle = {
    fontSize: ['0.875rem', null, '1rem', null, null, '1.125rem'],
    textAlign: 'center',
  };

  const buttonStyle = {
    height: ['1.5rem', '2rem', null, '2.5rem'],
    minWidth: ['1.5rem', '2rem', null, '2.5rem'],
    background: '#FFCE00',
    border: '2px solid #FFCE00',
    borderRadius: '3.125rem',
    color: '#000106',
    fontSize: ['0.575rem', '0.75rem', null, '1rem'],
    padding: ['0.25rem', '0.5rem', null, '0.625rem'],
    justifyContent: 'center',
    alignItems: 'center',
    _hover: {
      background: '#faf9f6',
      color: '#FFCE00',
      border: '2px solid #FFCE00',
    },
  };

  return (
    <Box
      w='100%'
      position='sticky'
      bg='#faf9f6'
      p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem', '4rem']}
      alignItems='center'
      justifyContent='center'
      id='reviews-section'
      gap='0'
    >
      <HStack justifyContent='space-between' alignItems='center' gap='0'>
        <Button {...buttonStyle} onClick={prevPerson}>
          <FaArrowLeft />
        </Button>
        <VStack maxW={{ base: '75%', '2xl': '60%' }} gap='0'>
          <HStack maxW={{ base: '6rem', md: '8rem' }}>
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
            <FaStar color='#dd0000' />
          </HStack>
          <Text py={{ base: '2rem', md: '3rem' }} {...textStyle}>
            {text}
          </Text>
          <Text {...textStyle} fontWeight='700'>
            {name}
          </Text>
          <Text {...textStyle} fontWeight='600'>
            {location}
          </Text>
        </VStack>
        <Button {...buttonStyle} onClick={nextPerson}>
          <FaArrowRight />
        </Button>
      </HStack>
    </Box>
  );
};

export default Reviews;
