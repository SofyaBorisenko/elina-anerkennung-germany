import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PersonalSupportIcon } from './icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import PersonalSupportImage from '../assets/PersonalSupport.JPG';
import '../App.scss';

const PersonalSupport = () => {
  const handleClick = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Box w='100%' position='sticky'>
      <Divider
        orientation='horizontal'
        w='90%'
        h='1.5px'
        mx='5%'
        my='0'
        bg='#000'
      />
      <VStack p={['4rem 1.25rem', '4rem']} justifyContent='center' gap='0'>
        <VStack gap='0' alignItems='center' id='personalsupport-section'>
          <VStack gap='0' alignItems='center'>
            <PersonalSupportIcon boxSize={[14, 16]} />
            <Heading
              as='h3'
              pb='1rem'
              fontFamily='Cormorant Garamond'
              lineHeight='120%'
              fontWeight='700'
              fontSize={['1.75rem', '2rem']}
              color='#000000'
            >
              Личное сопровождение
            </Heading>
            <Text
              w={['100%', '50%']}
              textAlign={'center'}
              fontFamily='Manrope'
              lineHeight={['140%', '120%']}
              fontWeight='400'
              fontSize='1rem'
              color='#000000'
            >
              Стоимость сопровождения зависит от вашего местоположения,
              необходимости визовой поддержки, поиска жилья и других услуг. Она
              формируется после тщательного анализа вашей ситуации.
            </Text>
          </VStack>
          <Image
            src={PersonalSupportImage}
            w={['100%', '20rem']}
            px={['0', '3rem']}
            py={['2rem', '0']}
            display={['block', 'none']}
          />
          <HStack
            gap={['1rem', '']}
            alignItems='center'
            justifyContent='center'
          >
            <VStack w={['50%', '20%']} justifyContent='center'>
              <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='xl' />
              <Heading as='h6' fontSize={'1rem'} textAlign='center'>
                Поступление в штудиенколлег
              </Heading>
              <Text textAlign='center'>
                Стоимость:
                <br />
                от 800 евро до
                <br />
                1500 евро
              </Text>
            </VStack>
            <Image
              src={PersonalSupportImage}
              w='20rem'
              px='3rem'
              mt='2rem'
              display={['none', 'block']}
            />
            <VStack w={['50%', '20%']} justifyContent='center'>
              <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='xl' />
              <Heading as='h6' fontSize={'1rem'} textAlign='center'>
                Трудоустройство в Германии
              </Heading>
              <Text textAlign='center'>
                Стоимость:
                <br />
                от 500 евро до
                <br />
                1000 евро
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <Button
          bg='#dd0000'
          color='#faf9f6'
          fontSize={['0.875rem', '1rem']}
          borderRadius={['0.625rem', '0.9375rem']}
          w={['16rem', '18rem']}
          h={['3.5rem', '4rem']}
          p='1.25rem 1.5rem'
          mt={['2rem', '3rem']}
          border='none'
          lineHeight='140%'
          onClick={handleClick('contactme-section')}
          link='#contact-me'
          _hover={{
            background: '#faf9f6',
            color: '#dd0000',
            border: '2px solid #dd0000',
          }}
        >
          Приобрести сопровождение
        </Button>
      </VStack>
      <div className='yellow-divider'></div>
    </Box>
  );
};

export default PersonalSupport;
