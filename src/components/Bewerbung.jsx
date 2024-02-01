import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  List,
  ListItem,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { BewerbungIcon, PriceTag3 } from './icons';
import '../App.scss';

const BewerbungCard = ({ title, listItems }) => {
  return (
    <Card
      direction='column'
      borderRadius='1.5rem'
      width='33.3%'
      height='16rem'
      p='1rem'
      background='#faf9f6'
      boxShadow='4px 4px 4px 0px rgba(0, 0, 0, 0.4)'
      border='1px solid #3f3f3fcc'
    >
      <CardBody>
        <VStack alignItems='flex-start' gap='1rem'>
          <HStack alignItems='center' gap='1rem'>
            <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='2xl' />
            <Heading
              as='h5'
              textAlign='left'
              fontFamily='Manrope'
              lineHeight='120%'
              fontWeight='700'
              fontSize='1rem'
              color='#000000'
            >
              {title}
            </Heading>
          </HStack>
          <List
            styleType='disc'
            stylePosition='inside'
            spacing={'0.25rem'}
            fontFamily='Manrope'
            lineHeight='140%'
            fontWeight='400'
            fontSize='0.875rem'
            color='#000000'
          >
            {listItems.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </VStack>
      </CardBody>
    </Card>
  );
};

const Bewerbung = () => {
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
    <Box
      w='100%'
      position='sticky'
      bg='#faf9f6'
      justifyContent='center'
      gap='0'
    >
      <VStack
        p='4rem 4rem 0 4rem'
        alignItems='center'
        justifyContent='center'
        id='bewerbung-section'
        gap='0'
      >
        <Box pl='1rem'>
          <BewerbungIcon boxSize={16} />
        </Box>
        <HStack pl='8rem' gap='0'>
          <Heading
            as='h3'
            textAlign='center'
            pb='2rem'
            fontFamily='Cormorant Garamond'
            lineHeight='120%'
            fontWeight='700'
            fontSize='2rem'
            color='#000000'
          >
            Пакет “Цепляющий Bewerbung
            <br /> для немецких работодателей или <br />
            для подачи на duales Studium”
          </Heading>
          <PriceTag3 boxSize={32} transform='translate(0rem, -5rem)' />
        </HStack>
        <VStack spacing={'1.5rem'} alignItems={'flex-start'}>
          <HStack spacing={'1.5rem'} justifyContent='center'>
            {[
              {
                title: 'Анализ и консультация',
                listItems: [
                  'Вступительная встреча для оценки ваших профессиональных целей',
                  'Разбор нового резюме или анализ текущего резюме и определение областей улучшения',
                ],
              },
              {
                title: 'Составление резюме',
                listItems: [
                  'Тщательное создание профессионального резюме с выделением ключевых навыков и достижений без воды',
                  'Оформление с учетом стандартов и ожиданий немецких работодателей',
                ],
              },
              {
                title: 'Сопроводительное письмо',
                listItems: [
                  'Написание сопроводительного письма с выделением ваших сильных сторон и соотношением их с требованиями вакансии',
                  'Персонализированный подход для каждого сопроводительного письма',
                ],
              },
            ].map((card, index) => (
              <BewerbungCard key={index} {...card} />
            ))}
          </HStack>
          <HStack spacing={'1.5rem'} justifyContent='center'>
            {[
              {
                title: 'Индивидуальные рекомендации',
                listItems: [
                  'Персональные советы и рекомендации по нахождению вакансий в онлайн-платформах',
                  'Инструкции по эффективному использованию профессиональных сетей',
                ],
              },
              {
                title: 'Практические советы для интервью',
                listItems: [
                  'Готовность к интервью с немецкими работодателями',
                  'Освещение типичных вопросов и стратегий успешного прохождения интервью',
                ],
              },
              {
                title: 'Следующие шаги и поддержка',
                listItems: [
                  'Инструкции по отправке документов работодателям',
                  'Поддержка в случае необходимости дополнительных доработок',
                ],
              },
            ].map((card, index) => (
              <BewerbungCard key={index} {...card} />
            ))}
          </HStack>
          <Text mt='5rem'>* 75.000 ₸ / 15.000 с</Text>
        </VStack>
        <Button
          bg='#dd0000'
          color='#faf9f6'
          border-radius='0.9375rem'
          w='12rem'
          h='4rem'
          p='1.25rem 1.5rem'
          border='none'
          transform='translate(0px, -4rem) scale(1)'
          onClick={handleClick('contactme-section')}
          link='#contact-me'
          _hover={{
            background: '#faf9f6',
            color: '#dd0000',
            border: '2px solid #dd0000',
          }}
        >
          Заказать пакет
        </Button>
      </VStack>
    </Box>
  );
};

export default Bewerbung;
