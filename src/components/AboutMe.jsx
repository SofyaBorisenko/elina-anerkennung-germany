import { Text, Box, Flex, Image, VStack } from '@chakra-ui/react';
import '../App.scss';
import './AboutMe.css';
import AboutMePhoto from '../assets/AboutMe_photo.jpg';

const AboutMe = () => {
  const textStyle = {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: ['140%', '130%'],
    mx: '0',
    my: ['0.4rem', '0.75rem'],
    fontSize: '1rem',
  };
  return (
    <Box className='aboutme' backgroundColor='#faf9f6' position='sticky'>
      <Flex
        flexDir={['column', 'row']}
        alignItems={['center', 'flex-start']}
        justifyContent='flex-end'
        gap='0px'
      >
        <Box display={['none', 'block']} className='aboutme-bg'></Box>
        <VStack
          w={['100%', '50%']}
          p={['4rem 1.25rem', '4rem']}
          alignItems='flex-start'
          gap='0px'
        >
          <h2 className='highlighted-heading' id='aboutme-section'>
            Обо мне
          </h2>
          {[
            'Приветствую тебя! Меня зовут Элина.',
            'Я — иммиграционный консультант по вопросам признания диплома, апробации и поступления в штудиенколлег в Германии.',
            'Имею 3 высших образования, последняя юридическая магистратура — по правам человека от европейского университета Виандрина (Германия).',
            'Тесно работаю с немецкими ведомствами по апробации, трудоустройству, делам иностранцев и администрации университетов и напрямую связываюсь с ними при возникновении вопросов. Умею общаться с местными властями на их языке и знакома с немецкой бюрократией от А до Я.',
            'За последние 5 лет успешно помогла многим школьникам поступить в немецкие ВУЗы, врачам — запустить процесс апробации, а также мигрантам в Германии с подтверждением их дипломов.',
            'Мой уникальный опыт и глубокие знания немецких иммиграционных законов, в том числе закона о признании иностранных квалификаций — это ключ к тому, чтобы предлагать не просто решения, а эффективные стратегии для преодоления сложностей, с которыми сталкиваются мигранты в Германии.',
          ].map((text, index) => (
            <Text key={index} {...textStyle}>
              {text}
            </Text>
          ))}
          <Image src={AboutMePhoto} display={['block', 'none']} mt='1rem' />
        </VStack>
      </Flex>
    </Box>
  );
};
export default AboutMe;
