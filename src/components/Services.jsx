import {
  Card,
  CardBody,
  Heading,
  Image,
  VStack,
  HStack,
  Box,
  Flex,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import '../App.scss';
import Service1 from '../assets/Service1.jpg';
import Service2 from '../assets/Service2.jpg';
import Service3 from '../assets/Service3.jpg';
import Service4 from '../assets/Service4.jpg';

const ServiceCard = ({
  imageSrc,
  title,
  description,
  duration,
  cost,
  link,
}) => {
  return (
    <Card
      direction='column'
      borderRadius='1.5rem'
      width='16.5rem'
      height='36rem'
      maxWidth='100%'
      background='#faf9f6'
      boxShadow='4px 4px 4px 0px rgba(0, 0, 0, 0.4)'
      border='1px solid #3f3f3fcc'
    >
      <Image
        src={imageSrc}
        borderTopRadius='1.5rem'
        maxW='100%'
        h='40%'
        objectFit='cover'
      />
      <VStack py='1rem' px='1.5rem' h='60%'>
        <CardBody>
          <VStack h='5rem' alignItems='flex-start'>
            <Icon color='#dd0000' fontSize='1.25rem' py='0.5rem' />
            <Heading
              fontFamily='Manrope'
              lineHeight='120%'
              fontWeight='700'
              fontSize='0.75rem'
              color='#000000'
            >
              {title}
            </Heading>
          </VStack>
          <VStack
            h='15rem'
            alignItems='flex-start'
            justifyContent='space-between'
            gap='0'
          >
            <VStack
              h='13rem'
              alignItems='flex-start'
              justifyContent='space-between'
            >
              <Text
                fontFamily='Manrope'
                lineHeight='140%'
                fontWeight='500'
                fontSize='0.75rem'
                color='#000000'
                gap='0px'
                m='0'
              >
                {description}
              </Text>
              <Text
                fontFamily='Manrope'
                lineHeight='140%'
                fontWeight='500'
                fontSize='0.75rem'
                color='#000000'
                m='0'
              >
                {duration}
                <br />
                {cost}
              </Text>
            </VStack>
            <HStack alignItems='center' h='2rem'>
              <Link
                href={link}
                fontFamily='Manrope'
                lineHeight='140%'
                fontWeight='700'
                fontSize='0.75rem'
                color='#000000'
                textDecoration='none'
              >
                Узнать подробнее
              </Link>
              <ArrowForwardIcon color='#dd0000' fontSize='1rem' />
            </HStack>
          </VStack>
        </CardBody>
      </VStack>
    </Card>
  );
};

const Services = () => {
  return (
    <Box
      alignItems='center'
      backgroundColor='#faf9f6'
      position='sticky'
      p='4rem'
    >
      <Flex justifyContent='center' pb='1rem'>
        <h1 className='highlighted-heading' id='services-section'>
          Услуги
        </h1>
      </Flex>
      <VStack backgroundColor='#faf9f6' py='2rem'>
        <HStack justifyContent='space-between' spacing={24}>
          <ServiceCard
            imageSrc={Service1}
            title='Личные онлайн-консультации'
            description='Консультация доступна по следующим запросам: - Апробация - Процедура признания диплома в Германии - Поступление в штудиенколлег'
            duration='Длительность: 1 час'
            cost='Стоимость: 60 евро'
            link='#service1'
          />
          <ServiceCard
            imageSrc={Service2}
            title='Пакет “Сопровождение по апробации”'
            description='Воспользуйтесь моей поддержкой и подайте заявку на апробацию самостоятельно, избегая затрат на услуги посреднических агентств и сэкономив ваши финансовые ресурсы.'
            cost='Стоимость: 250 евро'
            link='#service2'
          />
          <ServiceCard
            imageSrc={Service3}
            title='Пакет “Цепляющий Bewerbung для немецких работодателей”'
            description='Проанализируем ваши профессиональные цели, создадим резюме и сопроводительное письмо для поиска работы в Германии. Дам рекомендации по поиску вакансий, подготовке к интервью и отправке документов, а также поддержу при необходимости доработок.'
            cost='Стоимость: 150 евро'
            link='#service3'
          />
          <ServiceCard
            imageSrc={Service4}
            title='Личное сопровождение'
            description='Индивидуальный подход, предоставляемый только после личной консультации.'
            cost='Стоимость: по запросу'
            link='#service4'
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Services;
