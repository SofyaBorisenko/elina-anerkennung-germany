import {
  Box,
  Button,
  Flex,
  Divider,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ApprobationIcon } from './icons';
import PriceTag from '../assets/price_tag_2.png';
import '../assets/Approbation.JPG';
import '../App.scss';
import './Approbation.css';

const TimelineItem = ({ number, title, items }) => {
  return (
    <HStack>
      <VStack>
        <HStack alignItems='flex-start'>
          <VStack>
            <Flex w='2rem' h='2rem' justifyContent='center' alignItems='center'>
              <Text
                textAlign='center'
                fontFamily='Manrope'
                lineHeight='130%'
                fontStyle='normal'
                fontWeight='800'
                fontSize='1.5rem'
                color='#000000'
              >
                {number}
              </Text>
            </Flex>
            <Divider
              orientation='vertical'
              h='3rem'
              w='3px'
              bg='#FFCE00'
              m='0.5rem'
            />
          </VStack>
          <VStack alignItems='flex-start' pl='1rem'>
            <Flex h='2rem' alignItems='center'>
              <Heading
                as='h6'
                fontFamily='Manrope'
                lineHeight='130%'
                fontWeight='700'
                fontSize={['1rem', '0.875rem']}
                color='#000000'
              >
                {title}
              </Heading>
            </Flex>
            <List
              styleType='disc'
              stylePosition='inside'
              spacing={'0.15rem'}
              fontFamily='Manrope'
              lineHeight={['140%', '130%']}
              fontWeight='400'
              fontSize={['0.875rem', '0.825rem']}
              color='#000000'
            >
              {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </VStack>
        </HStack>
      </VStack>
      <VStack></VStack>
    </HStack>
  );
};

const LastTimelineItem = ({ number, title, items }) => {
  return (
    <HStack>
      <VStack>
        <HStack alignItems='flex-start'>
          <VStack>
            <Flex w='2rem' h='2rem' justifyContent='center' alignItems='center'>
              <Text
                textAlign='center'
                fontFamily='Manrope'
                lineHeight='130%'
                fontStyle='normal'
                fontWeight='800'
                fontSize='1.5rem'
                color='#000000'
              >
                {number}
              </Text>
            </Flex>
          </VStack>
          <VStack alignItems='flex-start' pl='1rem'>
            <Flex h='2rem' alignItems='center'>
              <Heading
                as='h6'
                fontFamily='Manrope'
                lineHeight='130%'
                fontWeight='700'
                fontSize={['1rem', '0.875rem']}
                color='#000000'
              >
                {title}
              </Heading>
            </Flex>
            <List
              styleType='disc'
              stylePosition='inside'
              spacing={'0.15rem'}
              fontFamily='Manrope'
              lineHeight={['140%', '130%']}
              fontWeight='400'
              fontSize={['0.875rem', '0.825rem']}
              color='#000000'
            >
              {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </VStack>
        </HStack>
      </VStack>
      <VStack></VStack>
    </HStack>
  );
};

const Approbation = () => {
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
    <Box w='100%' position='sticky'>
      <Divider
        display={['block', 'none']}
        orientation='horizontal'
        w='90%'
        h='1px'
        mx='5%'
        my='0'
        bg='#000'
      />
      <div className='approbation_background'>
        <VStack
          w='100%'
          position='sticky'
          justifyContent='center'
          gap='0'
          p={['4rem 1.25rem', '4rem 4rem 0 4rem']}
        >
          <VStack gap='0' alignItems='flex-start' id='approbation-section'>
            <HStack gap='0' alignItems='flex-start'>
              <VStack gap='0' alignItems='flex-start'>
                <HStack
                  w='100%'
                  alignItems='center'
                  justifyContent='space-between'
                  gap='0'
                >
                  <ApprobationIcon boxSize={[14, 16]} />
                  <Image
                    display={['flex', 'none']}
                    src={PriceTag}
                    alt='Цена: 250 евро'
                    transform='translate(0rem, 1rem) scale(0.7)'
                    alignSelf='center'
                  />
                </HStack>
                <Heading
                  as='h3'
                  pb='1rem'
                  fontFamily='Cormorant Garamond'
                  lineHeight='120%'
                  fontWeight='700'
                  fontSize={['1.75rem', '2rem']}
                  color='#000000'
                >
                  Пакет “Сопровождение по апробации — от сбора до отправки”
                </Heading>
              </VStack>
              <Image
                display={['none', 'flex']}
                src={PriceTag}
                alt='Цена: 250 евро'
                transform='translate(0rem, 0rem) scale(0.8)'
                alignSelf='center'
              />
            </HStack>
            <Text
              fontFamily='Manrope'
              lineHeight='140%'
              fontWeight='400'
              fontSize='1rem'
              color='#000000'
            >
              Этот пакет предоставляет поддержку в течение всего процесса, а
              продолжительность поддержки гарантирована до момента отправки всех
              необходимых документов на апробацию.
            </Text>
            <Flex
              flexDir={['column', 'row']}
              pt='2rem'
              gap={['1rem', '1rem']}
              alignItems='flex-start'
            >
              <VStack
                alignItems='flex-start'
                w={['100%', '50%']}
                gap={['1rem', '0.5rem']}
              >
                <TimelineItem
                  number='1'
                  title='Подготовительный этап'
                  items={[
                    'Вступительная консультация',
                    'Обзор процесса апробации и планирование',
                    'Рекомендации по выбору земли',
                  ]}
                />
                <TimelineItem
                  number='2'
                  title='Этап сбора документов'
                  items={[
                    'Руководство по пошаговому сбору необходимых документов',
                    'Помощь в оформлении документов',
                  ]}
                />
                <TimelineItem
                  number='3'
                  title='Заполнение формуляра на апробацию'
                  items={[
                    'Подробное заполнение официального формуляра',
                    'Подсказки и рекомендации для успешной подачи',
                  ]}
                />
                <TimelineItem
                  number='4'
                  title='Заявка на финансирование'
                  items={[
                    'Подготовка и отправка заявки на возможное финансирование',
                  ]}
                />
                <TimelineItem
                  number='5'
                  title='Профессиональное резюме'
                  items={[
                    'Составление профессионального резюме',
                    'Подготовка дополнительных материалов по запросу',
                  ]}
                />
                <Flex display={['flex', 'none']}>
                  <TimelineItem
                    number='6'
                    title='Присяжный переводчик и заполнение анкет'
                    items={[
                      'Предоставление контактов присяжного переводчика в Германии',
                      'Перевод в кратчайшие сроки',
                    ]}
                  />
                </Flex>
                <Flex display={['none', 'flex']}>
                  <LastTimelineItem
                    number='6'
                    title='Присяжный переводчик и заполнение анкет'
                    items={[
                      'Предоставление контактов присяжного переводчика в Германии',
                      'Перевод в кратчайшие сроки',
                    ]}
                  />
                </Flex>
              </VStack>
              <VStack
                alignItems='flex-start'
                w={['100%', '50%']}
                gap={['1rem', '0.5rem']}
              >
                <TimelineItem
                  number='7'
                  title='Альтернатива рабочего контракта '
                  items={[
                    'Предоставление альтернативных документов, которые заменяют контракт от немецкого работодателя (Stellenzusage)',
                  ]}
                />
                <TimelineItem
                  number='8'
                  title='Коммуникация с апробационным ведомством'
                  items={[
                    'Обеспечение постоянной связи с апробационным ведомством',
                    'Решение возможных вопросов и неопределенностей',
                  ]}
                />
                <TimelineItem
                  number='9'
                  title='Отправка документов'
                  items={[
                    'Подготовка и отправка полного комплекта документов в апробационное ведомство',
                  ]}
                />
                <TimelineItem
                  number='10'
                  title='Личная связь при возникновении вопросов'
                  items={[
                    'Предоставление каналов связи в случае необходимости консультации или уточнений',
                    'Поддержка действует, пока все необходимые документы не будут отправлены на апробацию',
                  ]}
                />
                <TimelineItem
                  number='11'
                  title='Предоставление немецкого адреса'
                  items={[
                    'Предоставление немецкого адреса для корреспонденции с ведомствами',
                    'Коммуникация через предоставленный адрес',
                  ]}
                />
                <LastTimelineItem
                  number='12'
                  title='Финальный этап'
                  items={[
                    'Тщательная проверка всех документов',
                    'Правильная отправка документов с номером для отслеживания',
                    'Поддержка до получения официального подтверждения от ведомства',
                    'Проверка статуса поданных документов в случае задержки более 3 мес. с момента подачи',
                  ]}
                />
              </VStack>
            </Flex>
            <Text display={['none', 'block']} mt='6.5rem'>
              * 125.000 ₸ / 25.000 с
            </Text>
          </VStack>
          <Button
            bg='#dd0000'
            color='#faf9f6'
            fontSize={['0.875rem', '1rem']}
            borderRadius={['0.625rem', '0.9375rem']}
            w={['10rem', '14rem']}
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
            Заказать пакет
          </Button>
          <Text
            display={['block', 'none']}
            mt={['2rem', '0']}
            fontSize={['0.75rem', '1rem']}
          >
            * 125.000 ₸ / 25.000 с
          </Text>
        </VStack>
      </div>
    </Box>
  );
};

export default Approbation;
