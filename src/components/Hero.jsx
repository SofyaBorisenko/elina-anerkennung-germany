import { Button, VStack, Box, Heading } from '@chakra-ui/react';
import '../App.scss';
import HeroBg from '../assets/Hero_photo.jpg';
import HeroBgMob from '../assets/Service1.jpg';

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
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%), url(${HeroBgMob}), #faf9f6 50%`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: -1,
    padding: ['1.25rem', '2rem'],
  };

  const buttonStyle = {
    onClick: handleClick('consultation-section'),
    link: '#online-consultation',
    background: '#dd0000',
    color: '#faf9f6',
    fontSize: ['0.875rem', '1rem'],
    border: 'none',
    borderRadius: ['0.625rem', '0.9375rem'],
    width: ['8rem', '10rem', '12rem'],
    height: ['3.5rem', '4rem'],
    marginTop: ['2rem', '2rem'],
    padding: '1.25rem 1.5rem',
    _hover: {
      background: '#faf9f6',
      color: '#dd0000',
      border: '2px solid #dd0000',
    },
  };

  const h4Style = {
    maxWidth: ['60%', '70%'],
    marginTop: '1rem',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    letterSpacing: '-0.015px',
    fontSize: '1.15rem',
    fontWeight: '300',
    lineHeight: '140%',
  };

  return (
    <div>
      {/* Mobile Version */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Box {...bgMobStyle}>
          <VStack alignItems='flex-start' py='2rem'>
            <h1>
              Достойная иммиграция
              <br />и устойчивая интеграция
              <br /> <span className='highlighted-heading'>в Германии</span>
            </h1>
            <Heading as='h4' {...h4Style}>
              От тупика к ясности: настройте свой курс на профессиональный и
              учебный успех с моей поддержкой!
            </Heading>
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
        mt='4.5rem'
        position='relative'
        color='#faf9f6'
      >
        <VStack alignItems='flex-start' p='5rem 0 4rem 5rem'>
          <h1 style={{ maxWidth: '70wv' }}>
            Достойная иммиграция
            <br />и устойчивая интеграция
            <br /> <span className='highlighted-heading'>в Германии</span>
          </h1>
          <h4 style={{ maxWidth: '50wv', marginTop: '2.5rem' }}>
            От тупика к ясности: настройте свой курс
            <br />
            на профессиональный и учебный успех
            <br />с моей поддержкой!
          </h4>
          <Button {...buttonStyle}>
            Записаться
            <br />
            на консультацию
          </Button>
        </VStack>
        <Box {...bgStyle}></Box>
        <div className='yellow-divider'></div>
      </Box>
    </div>
  );
};

export default Hero;
