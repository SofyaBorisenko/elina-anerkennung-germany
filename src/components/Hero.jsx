import { Button, VStack, Box, Heading, Text } from '@chakra-ui/react';
import '../App.scss';
import HeroBg from '../assets/Hero_photo.webp';
import HeroBgMob from '../assets/Service1.webp';

const Hero = () => {
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

  const bgStyle = {
    width: '40%',
    height: '100%',
    background: `url(${HeroBg}) center/cover`,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1,
  };

  const bgMobStyle = {
    width: '100%',
    height: ['100vh', 'auto'],
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%), url(${HeroBgMob}), #faf9f6 50%`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'sticky',
    top: 0,
    left: 0,
    padding: ['4rem 1.25rem', '2rem'],
  };

  const buttonStyle = {
    onClick: handleClick('consultation-section'),
    link: '#online-consultation',
    background: '#dd0000',
    color: '#faf9f6',
    fontSize: ['0.875rem', '1rem', null, null, null, '1.25rem'],
    border: 'none',
    borderRadius: ['0.625rem', '0.9375rem'],
    width: ['9rem', '10rem', '12rem', null, null, '14rem'],
    height: ['3.5rem', '4rem', null, null, null, '5rem'],
    marginTop: ['3rem', '2rem', null, null, null, '3rem'],
    padding: '1.25rem 1.5rem',
    _hover: {
      background: '#faf9f6',
      color: '#dd0000',
      border: '2px solid #dd0000',
    },
    id: 'al',
    ariaLabel: 'Кнопка, ведущая к услуге онлайн-консультации',
  };

  const h1Style = {
    as: 'h1',
    maxWidth: ['100%', '80%'],
    fontFamily: 'Cormorant Infant',
    fontSize: ['2.375rem', '2.25rem', null, '3.25rem', null, '3.75rem'],
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '120%',
    letterSpacing: '-0.10875rem',
    textTransform: 'uppercase',
  };

  const textStyle = {
    maxWidth: ['60%', '70%'],
    marginTop: ['2rem', '1rem', '1.5rem', null, null, '2.5rem'],
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    letterSpacing: '-0.015px',
    fontSize: ['1.15rem', null, null, null, null, '1.5rem'],
    fontWeight: '300',
    lineHeight: '140%',
  };

  return (
    <div>
      {/* Mobile Version */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Box {...bgMobStyle} id='hero-section'>
          <VStack alignItems='flex-start' mt='3.75rem' py='2rem'>
            <Heading {...h1Style}>
              Достойная иммиграция
              <br />и устойчивая интеграция
              <br /> <span className='highlighted-heading'>в Германии</span>
            </Heading>
            <Text {...textStyle}>
              От тупика к ясности: настройте свой курс на профессиональный и
              учебный успех с моей поддержкой!
            </Text>
            <Button {...buttonStyle}>
              Записаться на
              <br />
              консультацию
            </Button>
          </VStack>
        </Box>
      </Box>
      {/* Full-Screen Version */}
      <Box
        display={{ base: 'none', md: 'block' }}
        mt={{ md: '4.5rem', '2xl': '6rem' }}
        position='relative'
        color='#faf9f6'
        id='hero-section'
      >
        <VStack
          alignItems='flex-start'
          p={{ md: '5rem 2rem 4rem 2rem', lg: '5rem 0 4rem 4rem' }}
        >
          <Heading as='h1' {...h1Style}>
            Достойная иммиграция
            <br />и устойчивая интеграция
            <br /> <span className='highlighted-heading'>в Германии</span>
          </Heading>
          <Text {...textStyle}>
            От тупика к ясности: настройте свой курс
            <br />
            на профессиональный и учебный успех
            <br />с моей поддержкой!
          </Text>
          <Button {...buttonStyle}>
            Записаться
            <br />
            на консультацию
          </Button>
        </VStack>
        <Box {...bgStyle}></Box>
        <Box className='yellow-divider'></Box>
      </Box>
    </div>
  );
};

export default Hero;
