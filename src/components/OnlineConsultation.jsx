import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  UnorderedList,
  ListItem,
  VStack,
  Text,
} from '@chakra-ui/react';
import '../App.scss';
import { ConsultationIcon } from './icons';
import PriceTag from '../assets/price_tag_1.png';

const ConsultationCard = ({ title, listItems }) => (
  <Card
    direction='column'
    borderRadius='1.5rem'
    width={['100%', null, null, '16rem', '18rem', '20rem']}
    height={['auto', null, null, '32.5rem', '29rem', '38rem']}
    maxWidth='100%'
    padding={['1.25rem', null, '1.5rem', '1.25rem']}
    background='#faf9f6'
    boxShadow={['4px 4px 4px 0px rgba(0, 0, 0, 0.4)', null, null, null]}
    border={['1px solid #3f3f3fcc', null, null, null]}
  >
    <CardHeader
      h={['auto', null, null, '5.5rem']}
      maxW='15rem'
      p={['0 0 1.25rem 0', null, '0.5rem 0 1.5rem 0', '1.25rem 0']}
      alignSelf='center'
      textAlign='center'
      fontFamily='Manrope'
      lineHeight='130%'
      fontWeight='700'
      fontSize={['1.25rem', null, null, '1rem', null, '1.25rem']}
      color='#000000'
      textDecoration='underline solid #dd0000 2px'
      textUnderlineOffset='4px'
    >
      {title}
    </CardHeader>
    <CardBody p={['0', null, '0 0 0 0.75rem', '0.5rem']}>
      <UnorderedList
        spacing={3}
        textAlign='left'
        fontFamily='Manrope'
        lineHeight='130%'
        fontWeight={['400', null, null, '300']}
        fontSize={['1rem', null, null, '0.875rem', null, '1.125rem']}
        color='#000000'
      >
        {listItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </CardBody>
  </Card>
);

const OnlineConsultation = () => {
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
    pb: ['1rem', null, '2rem'],
    fontFamily: 'Cormorant Garamond',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: ['1.75rem', null, null, '2rem', null, '2.25rem'],
    color: '#000000',
  };

  const buttonStyle = {
    background: '#dd0000',
    color: '#faf9f6',
    fontSize: ['0.875rem', null, null, '1rem', null, '1.125rem'],
    borderRadius: ['0.625rem', null, null, '0.9375rem'],
    width: ['13rem', null, null, '14rem', null, '16rem'],
    height: ['3.5rem', null, null, '4rem'],
    marginTop: ['2rem', null, '2.5rem', '0', null, '0.5rem'],
    padding: ['1.25rem, null, null, 1.5rem'],
    border: 'none',
    transform: [
      '',
      null,
      'translate(0px, -6rem) scale(1)',
      'translate(0px, -4rem) scale(1)',
    ],
    onClick: handleClick('contactme-section'),
    link: '#contact-me',
    _hover: {
      background: '#faf9f6',
      color: '#dd0000',
      border: '2px solid #dd0000',
    },
  };

  return (
    <VStack
      w='100%'
      position='sticky'
      bg='#faf9f6'
      p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem 0 2rem', '4rem 4rem 0 4rem']}
      justifyContent='center'
      gap='0'
    >
      <VStack
        maxW={['100%', null, '80%', '100%']}
        gap='0'
        alignItems='flex-start'
        id='consultation-section'
      >
        <HStack
          w='100%'
          alignItems='center'
          justifyContent='space-between'
          gap='0'
        >
          <ConsultationIcon boxSize={[14, null, null, 16]} />
          <Image
            display={['flex', null, null, 'none']}
            src={PriceTag}
            alt='Цена: 60 евро'
            transform='translate(0,1rem) scale(0.7)'
          />
        </HStack>
        <HStack alignItems='flex-start'>
          <Heading {...h3Style}>
            Личные онлайн-консультации.
            <br /> Получите персональные рекомендации
            <br /> по следующим вопросам:
          </Heading>
          <Flex display={['none', null, null, 'flex']}>
            <Image
              src={PriceTag}
              alt='Цена: 60 евро'
              transform='translate(-6.5rem, -3rem) scale(0.8)'
            />
          </Flex>
        </HStack>
        <Flex
          flexDir={['column', null, null, 'row']}
          gap={['1.5rem', '1rem', '1.5rem', '2rem', null, '4rem']}
          alignItems='flex-start'
        >
          {[
            {
              title: 'Апробация',
              listItems: [
                'Детальный разбор ваших документов',
                'Тщательное изучение требований конкретного апробационного ведомства и проверка соответствия всех документов',
                'Рекомендации по финансированию и план действий для подготовки к успешной подаче на апробацию',
                'Обсуждение последующих шагов после подачи документов',
              ],
            },
            {
              title: 'Процедура признания диплома',
              listItems: [
                'Подробный анализ вашего диплома и его сопоставимость немецкой квалификации',
                'Нахождение компетентного органа, отвечающего за признание вашей квалификации/диплома',
                'Четкое объяснение процедуры признания',
                'Успешное признание и обсуждение реальных шансов на трудоустройство',
                'При неясности квалификации отправка запроса в компетентные органы',
              ],
            },
            {
              title: 'Поступление в штудиенколлег',
              listItems: [
                'Разбор ваших интересов и целей, чтобы подобрать наилучшую программу (курс)',
                'Подробно рассмотрим требования и документы, необходимые для успешного поступления',
                'Обсудим все этапы процесса подачи заявки в штудиенколлег, включая сроки, порядок и особенности конкретного учебного заведения',
                'Разберем визовые вопросы',
              ],
            },
          ].map((card, index) => (
            <ConsultationCard key={index} {...card} />
          ))}
        </Flex>
        <Text display={['none', null, 'block']} mt='6rem'>
          * 30.000 ₸ / 6.000 с
        </Text>
      </VStack>
      <Button {...buttonStyle}>Получить консультацию</Button>
      <Text
        display={['block', null, 'none']}
        mt={['2rem', null, '0']}
        fontSize='0.75rem'
      >
        * 30.000 ₸ / 6.000 с
      </Text>
    </VStack>
  );
};

export default OnlineConsultation;
