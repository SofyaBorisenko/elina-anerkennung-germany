import { Text, Box, Image, VStack, HStack, Heading } from '@chakra-ui/react';
import '../App.scss';
import AboutMePhoto from '../assets/AboutMe_photo.jpg';

const AboutMe = () => {
  return (
    <Box className='aboutme' backgroundColor='#faf9f6' position='sticky'>
      <HStack alignItems='flex-start'>
        <Image
          src={AboutMePhoto}
          align={'top'}
          float={'left'}
          w='50%'
          h='auto'
          objectFit='contain'
        ></Image>
        <VStack w='50%' p='4rem' alignItems='flex-start'>
          <h1 className='highlighted-heading' id='aboutme-section'>
            Обо мне
          </h1>
          <Text
            fontFamily='Manrope'
            fontSize='1.175rem'
            fontWeight='400'
            fontStyle='normal'
            lineHeight='130%'
            m='0'
          >
            <p>Приветствую тебя! Меня зовут Элина.</p>
            <p>
              Я — иммиграционный консультант по вопросам признания диплома,
              апробации и поступления в штудиенколлег в Германии.
            </p>
            <p>
              Имею 3 высших образования, последняя юридическая магистратура — по
              правам человека от европейского университета Виандрина (Германия).
            </p>
            <p>
              Тесно работаю с немецкими ведомствами по апробации,
              трудоустройству, делам иностранцев и администрации университетов и
              напрямую связываюсь с ними при возникновении вопросов. Умею
              общаться с местными властями на их языке и знакома с немецкой
              бюрократией от А до Я.
            </p>
            <p>
              За последние 5 лет успешно помогла многим школьникам поступить в
              немецкие ВУЗы, врачам — запустить процесс апробации, а также
              мигрантам в Германии с подтверждением их дипломов.
            </p>
            <p>
              Мой уникальный опыт и глубокие знания немецких иммиграционных
              законов, в том числе закона о признании иностранных квалификаций —
              это ключ к тому, чтобы предлагать не просто решения, а эффективные
              стратегии для преодоления сложностей, с которыми сталкиваются
              мигранты в Германии.
            </p>
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default AboutMe;
