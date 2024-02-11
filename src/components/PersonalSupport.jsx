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

  const h3Style = {
    as: 'h3',
    pb: '1rem',
    fontFamily: 'Cormorant Garamond',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: ['1.75rem', null, null, '2rem', null, '2.25rem'],
    color: '#000000',
  };

  const h6Style = {
    as: 'h6',
    fontFamily: 'Manrope',
    lineHeight: '140%',
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: { base: '1rem', '2xl': '1.125rem' },
  };

  const textStyle = {
    color: '#000000',
    textAlign: 'center',
    fontSize: { base: '1rem', '2xl': '1.125rem' },
    fontWeight: '400',
  };

  return (
    <Box w='100%' position='sticky' bg='#faf9f6'>
      <Divider
        orientation='horizontal'
        w='90%'
        h='1.5px'
        mx='5%'
        my='0'
        bg='#000'
      />
      <VStack
        p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem', '4rem']}
        justifyContent='center'
        gap='0'
      >
        <VStack gap='0' alignItems='center' id='personalsupport-section'>
          <VStack gap='0' alignItems='center'>
            <PersonalSupportIcon boxSize={[14, null, null, 16]} />
            <Heading {...h3Style}>Личное сопровождение</Heading>
            <Text
              w={['100%', null, '60%', '50%']}
              textAlign={'center'}
              fontFamily='Manrope'
              lineHeight={['140%', null, null, '120%']}
              fontWeight='400'
              fontSize={['1rem', null, null, null, null, '1.125rem']}
              color='#000000'
            >
              Стоимость сопровождения зависит от вашего местоположения,
              необходимости визовой поддержки, поиска жилья и других услуг. Она
              формируется после тщательного анализа вашей ситуации.
            </Text>
          </VStack>
          <Image
            src={PersonalSupportImage}
            w={['100%', '80%', '', null]}
            px={['0', null, '', null]}
            py={['2rem', '3rem', '', null]}
            display={['block', null, 'none', null]}
          />
          <HStack
            width={['100%', '80%', null, '70%']}
            gap={['1rem', null, null, '0']}
            alignItems='center'
            justifyContent='center'
            pb={['0', '1rem', null, '0']}
          >
            <VStack w={['50%', null, '30%', '20%']} justifyContent='center'>
              <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='xl' />
              <Heading {...h6Style}>
                Поступление
                <br />в штудиенколлег
              </Heading>
              <Text {...textStyle}>
                Стоимость:
                <br />
                от 800 евро до
                <br />
                1500 евро
              </Text>
            </VStack>
            <Image
              src={PersonalSupportImage}
              w={{ md: '20rem', '2xl': '26rem' }}
              px='3rem'
              mt='2rem'
              display={['none', null, 'block']}
            />
            <VStack w={['50%', null, '30%', '20%']} justifyContent='center'>
              <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='xl' />
              <Heading {...h6Style}>
                Трудоустройство <br />в Германии
              </Heading>
              <Text {...textStyle}>
                Стоимость:
                <br />
                от 1000 евро до
                <br />
                2000 евро
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <Button
          bg='#dd0000'
          color='#faf9f6'
          fontSize={['0.875rem', null, null, '1rem', null, '1.125rem']}
          borderRadius={['0.625rem', null, null, '0.9375rem']}
          w={['16rem', null, null, '18rem']}
          h={['3.5rem', null, null, '4rem']}
          p='1.25rem 1.5rem'
          mt={['2rem', null, null, '3rem']}
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
