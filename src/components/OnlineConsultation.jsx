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
    width={['100%', '18rem']}
    height={['auto', '30.5rem']}
    maxWidth='100%'
    background='#faf9f6'
    boxShadow={['none', '4px 4px 4px 0px rgba(0, 0, 0, 0.4)']}
    border={['none', '1px solid #3f3f3fcc']}
  >
    <CardHeader
      h={['auto', '5.5rem']}
      maxW='15rem'
      p='1.5rem'
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
    <CardBody p={['0', '0.5rem 1rem 1rem 1rem']} h='25rem'>
      <UnorderedList
        spacing={3}
        textAlign='left'
        fontFamily='Manrope'
        lineHeight='130%'
        fontWeight={['400', '300']}
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
  return (
    <VStack
      w='100%'
      position='sticky'
      bg='#faf9f6'
      p={['4rem 1.25rem', '4rem 4rem 0 4rem']}
      justifyContent='center'
      gap='0'
    >
      <VStack gap='0' alignItems='flex-start' id='consultation-section'>
        <HStack
          w='100%'
          alignItems='center'
          justifyContent='space-between'
          gap='0'
        >
          <ConsultationIcon boxSize={[14, 16]} />
          <Image
            display={['flex', 'none']}
            src={PriceTag}
            alt='Цена: 60 евро'
            transform='translate(0, 2rem) scale(0.7)'
          />
        </HStack>
        <HStack alignItems='flex-start'>
          <Heading
            as='h3'
            pb={['1rem', '2rem']}
            fontFamily='Cormorant Garamond'
            lineHeight='120%'
            fontWeight='700'
            fontSize={['1.75rem', '2rem']}
            color='#000000'
          >
            Личные онлайн-консультации.
            <br /> Получите персональные рекомендации
            <br /> по следующим вопросам:
          </Heading>
          <Flex display={['none', 'flex']}>
            <Image
              src={PriceTag}
              alt='Цена: 60 евро'
              transform='translate(-6.5rem, -3rem) scale(0.8)'
            />
          </Flex>
        </HStack>
        <Flex flexDir={['column', 'row']} gap={['0.5rem', '2rem']}>
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
        <Text display={['none', 'block']} mt='6.5rem'>
          * 30.000 ₸ / 6.000 с
        </Text>
      </VStack>
      <Button
        bg='#dd0000'
        color='#faf9f6'
        fontSize={['0.875rem', '1rem']}
        borderRadius={['0.625rem', '0.9375rem']}
        w={['13rem', '14rem']}
        h={['3.5rem', '4rem']}
        mt={['2rem', '0']}
        p='1.25rem 1.5rem'
        border='none'
        transform={['', 'translate(0px, -4.5rem) scale(1)']}
        onClick={handleClick('contactme-section')}
        link='#contact-me'
        _hover={{
          background: '#faf9f6',
          color: '#dd0000',
          border: '2px solid #dd0000',
        }}
      >
        Получить консультацию
      </Button>
      <Text
        display={['block', 'none']}
        mt={['2rem', '0']}
        fontSize={['0.75rem', '1rem']}
      >
        * 30.000 ₸ / 6.000 с
      </Text>
    </VStack>
  );
};

export default OnlineConsultation;
