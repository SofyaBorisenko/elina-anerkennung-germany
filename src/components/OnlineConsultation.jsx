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
import { ConsultationIconBig } from './icons';
import PriceTag from '../assets/price_tag_1.png';

const ConsultationCard = ({ title, listItems }) => (
  <Card
    direction='column'
    borderRadius='1.5rem'
    width='18rem'
    height='30.5rem'
    maxWidth='100%'
    background='#faf9f6'
    boxShadow='4px 4px 4px 0px rgba(0, 0, 0, 0.4)'
    border='1px solid #3f3f3fcc'
  >
    <CardHeader
      h='5.5rem'
      maxW='15rem'
      alignSelf='center'
      textAlign='center'
      fontFamily='Manrope'
      lineHeight='130%'
      fontWeight='700'
      fontSize='1.125rem'
      color='#000000'
      textDecoration='underline solid #dd0000 2px'
      textUnderlineOffset='4px'
    >
      {title}
    </CardHeader>
    <CardBody p='0.5rem 1rem 1rem 1rem' h='25rem'>
      <UnorderedList
        spacing={3}
        textAlign='left'
        fontFamily='Manrope'
        lineHeight='130%'
        fontWeight='300'
        fontSize='1rem'
        color='#000000'
      >
        {listItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </CardBody>
  </Card>
);

const OnlineConsultation = () => (
  <VStack
    w='100%'
    position='sticky'
    bg='#faf9f6'
    p='4rem 4rem 0 4rem'
    justifyContent='center'
    gap='0'
  >
    <VStack gap='0' alignItems='flex-start'>
      <ConsultationIconBig />
      <HStack alignItems='flex-start'>
        <Heading
          as='h3'
          id='consultation-section'
          pb='3rem'
          fontFamily='Cormorant Garamond'
          lineHeight='120%'
          fontWeight='700'
          fontSize='2rem'
          color='#000000'
        >
          Личные онлайн-консультации.
          <br /> Получите персональные рекомендации
          <br /> по следующим вопросам:
        </Heading>
        <Flex>
          <Image
            src={PriceTag}
            alt='Цена: 60 евро'
            transform='translate(-6.5rem, -3rem) scale(0.8)'
          />
        </Flex>
      </HStack>
      <HStack spacing='2rem'>
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
      </HStack>
      <Text mt='6.5rem'>* 30.000 ₸ / 6.000 с</Text>
    </VStack>
    <Button
      bg='#dd0000'
      color='#faf9f6'
      border-radius='0.9375rem'
      w='14rem'
      h='4rem'
      p='1.25rem 1.5rem'
      border='none'
      transform='translate(0px, -4.5rem) scale(1)'
    >
      Получить консультацию
    </Button>
  </VStack>
);

export default OnlineConsultation;
