import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
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
      width={['100%', null, '33.3%']}
      height={['auto']}
      p='1rem'
      background='#faf9f6'
      boxShadow='4px 4px 4px 0px rgba(0, 0, 0, 0.4)'
      border='1px solid #3f3f3fcc'
    >
      <CardBody p={['1rem', null, null, '1.25rem']}>
        <VStack alignItems='flex-start' gap='1rem'>
          <HStack alignItems='center' gap='1rem' lang='ru'>
            <FontAwesomeIcon icon={faSquareCheck} color='#dd0000' size='xl' />
            <Heading
              as='h5'
              textAlign='left'
              fontFamily='Manrope'
              lineHeight='120%'
              fontWeight='700'
              fontSize={['1rem', null, null, null, null, '1.125rem']}
              wordBreak='break-word'
              hyphens='auto'
              color='#000000'
            >
              {title}
            </Heading>
          </HStack>
          <List
            styleType='disc'
            stylePosition='inside'
            spacing='0.25rem'
            fontFamily='Manrope'
            lineHeight='140%'
            fontWeight='400'
            fontSize={['0.875rem', null, null, null, null, '1.125rem']}
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

  const h3Style = {
    as: 'h3',
    textAlign: ['left', null, null, 'center'],
    maxWidth: ['100%', null, null, '30rem'],
    pb: ['2rem', null, null, null, null, '3rem'],
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
    width: ['10rem', null, null, '12rem'],
    height: ['3.5rem', null, null, '4rem'],
    marginTop: ['2rem', null, '0', null],
    padding: '1.25rem 1.5rem',
    border: 'none',
    transform: ['', null, 'translate(0px, -4rem) scale(1)'],
    onClick: handleClick('contactme-section'),
    link: '#contact-me',
    _hover: {
      background: '#faf9f6',
      color: '#dd0000',
      border: '2px solid #dd0000',
    },
    id: 'al',
    ariaLabel: 'Кнопка, ведущая к контактной форме для заказа услуги',
  };

  return (
    <Box
      w='100%'
      position='sticky'
      bg='#faf9f6'
      justifyContent='center'
      gap='0'
    >
      <Divider
        display={['block', null, 'none', null]}
        orientation='horizontal'
        w='90%'
        h='1px'
        mx='5%'
        my='0'
        bg='#000'
      />
      <VStack
        p={[
          '4rem 1.25rem',
          '4rem 2rem',
          '3rem 2rem 0 2rem',
          '4rem 4rem 0 4rem',
        ]}
        alignItems='center'
        justifyContent='center'
        id='bewerbung-section'
        gap='0'
      >
        <HStack
          w='100%'
          alignItems='center'
          justifyContent={['space-between', null, null, 'center']}
          gap='0'
        >
          <BewerbungIcon boxSize={[14, null, null, 16]} />
          <PriceTag3
            display={['flex', null, null, 'none']}
            boxSize={28}
            transform='translate(0rem, 1rem)'
          />
        </HStack>
        <HStack pl={['0', null, null, '8rem']} gap='0' alignItems='flex-start'>
          <Heading {...h3Style}>
            Пакет “Цепляющий Bewerbung для немецких работодателей или для подачи
            на duales Studium”
          </Heading>
          <Flex display={['none', null, null, 'flex']}>
            <PriceTag3 boxSize={32} transform='translate(0rem, -5rem)' />
          </Flex>
        </HStack>
        <VStack
          spacing={['1.5rem', '1rem', '1.5rem', null, null, '2.5rem']}
          alignItems={'flex-start'}
        >
          <Flex
            flexDir={['column', null, 'row']}
            gap={['1.5rem', '1rem', '1.5rem', null, null, '2.5rem']}
            justifyContent='center'
            w='100%'
          >
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
          </Flex>
          <Flex
            flexDir={['column', null, 'row']}
            gap={['1.5rem', '1rem', '1.5rem', null, null, '2.5rem']}
            justifyContent='center'
            w='100%'
          >
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
          </Flex>
          <Text display={['none', null, 'block']} mt='5rem'>
            * 75.000 ₸ / 15.000 с
          </Text>
        </VStack>
        <Button {...buttonStyle}>Заказать пакет</Button>
        <Text
          display={['block', null, 'none']}
          mt={['2rem', null, '0']}
          fontSize={['0.75rem', null, '1rem']}
        >
          * 75.000 ₸ / 15.000 с
        </Text>
      </VStack>
    </Box>
  );
};

export default Bewerbung;
