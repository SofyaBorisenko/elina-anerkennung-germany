import { Text, Box, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import '../App.scss';
import AboutMePhoto from '../assets/AboutMe_photo.webp';

const AboutMe = () => {
  const bgStyle = {
    width: '50%',
    height: '100%',
    background: `url(${AboutMePhoto}) center/cover`,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const h2Style = {
    as: 'h2',
    id: 'aboutme-section',
    marginBottom: '1.25rem',
    fontFamily: 'Cormorant Infant',
    fontSize: ['2.5rem', null, null, '3rem', null, '3.25rem'],
    fontWeight: '700',
    lineHeight: '120%',
    textTransform: 'uppercase',
  };
  const textStyle = {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: ['140%', null, '130%'],
    mx: '0',
    my: ['0.4rem', null, '0.75rem', null, null, '1rem'],
    fontSize: ['1rem', null, null, null, null, '1.25rem'],
  };
  return (
    <Box className='aboutme' backgroundColor='#faf9f6' position='sticky'>
      <Flex
        flexDir={['column', null, 'row']}
        alignItems={['center', null, 'flex-start']}
        justifyContent='flex-end'
        gap='0px'
      >
        <Box display={['none', null, 'block']} {...bgStyle}></Box>
        <VStack
          w={['100%', null, '50%']}
          p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem 3rem 3rem', '4rem']}
          alignItems='flex-start'
          gap='0px'
        >
          <Heading {...h2Style} className='highlighted-heading'>
            Обо мне
          </Heading>
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
          <Image
            loading='lazy'
            src={AboutMePhoto}
            display={['block', null, 'none']}
            mt='1rem'
            alt='Фотография Элины в пиджаке мятного цвета, крупным планом'
          />
        </VStack>
      </Flex>
    </Box>
  );
};
export default AboutMe;
