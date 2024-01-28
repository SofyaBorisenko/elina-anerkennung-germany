import { Button, VStack, Box } from '@chakra-ui/react';
import '../App.scss';
import './Hero.css';
import '../assets/Hero_photo.jpg';

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
  return (
    <div>
      <Box mt='4.5rem' position='relative' color='#faf9f6'>
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
          <Button
            onClick={handleClick('consultation-section')}
            link='#online-consultation'
            bg='#dd0000'
            color='#faf9f6'
            w='12rem'
            h='4rem'
            p='1.25rem 1.5rem'
            mt='2rem'
            border='none'
            _hover={{
              background: '#faf9f6',
              color: '#dd0000',
              border: '2px solid #dd0000',
            }}
          >
            Записаться
            <br />
            на консультацию
          </Button>
        </VStack>
        <div className='hero-bg'></div>
      </Box>
      <div className='yellow-divider'></div>
    </div>
  );
};

export default Hero;
