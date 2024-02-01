import {
  Card,
  CardBody,
  Heading,
  IconButton,
  Image,
  VStack,
  HStack,
  Box,
  Flex,
  Text,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  ConsultationIcon,
  ApprobationIcon,
  BewerbungIcon,
  PersonalSupportIcon,
} from './icons';
import '../App.scss';
import Service1 from '../assets/Service1.jpg';
import Service2 from '../assets/Service2.jpg';
import Service3 from '../assets/Service3.jpg';
import Service4 from '../assets/Service4.jpg';

const ServiceCard = ({
  imageSrc,
  icon,
  title,
  description,
  duration,
  cost,
  link,
  id,
}) => {
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
    <Card
      direction='column'
      borderRadius='1.5rem'
      width='16.5rem'
      height='37rem'
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
      <VStack h='60%'>
        <CardBody>
          <VStack h='5.5rem' alignItems='flex-start'>
            {icon}
            <Heading
              as='h5'
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
            h='14.5rem'
            alignItems='flex-start'
            justifyContent='space-between'
            gap='0'
          >
            <VStack
              h='11.5rem'
              alignItems='flex-start'
              justifyContent='space-between'
              gap='0'
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
            <HStack alignItems='center' h='2rem' gap='0'>
              <Text
                fontFamily='Manrope'
                lineHeight='140%'
                fontWeight='700'
                fontSize='0.75rem'
                color='#000000'
                textDecoration='none'
              >
                Узнать подробнее
              </Text>
              <IconButton
                href={link}
                onClick={handleClick(id)}
                icon={<ArrowForwardIcon color='#dd0000' fontSize='1rem' />}
                _hover={{
                  background: '#faf9f6',
                }}
                boxShadow='none'
              />
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
        <h2 className='highlighted-heading' id='services-section'>
          Услуги
        </h2>
      </Flex>
      <VStack backgroundColor='#faf9f6' py='2rem'>
        <HStack justifyContent='space-between' spacing={'1.5rem'}>
          <ServiceCard
            imageSrc={Service1}
            id='consultation-section'
            icon={<ConsultationIcon boxSize={8} />}
            title='Личные онлайн-консультации'
            description='Консультация доступна по следующим запросам: - Апробация - Процедура признания диплома в Германии - Поступление в штудиенколлег'
            duration='Длительность: 1 час'
            cost='Стоимость: 60 евро'
            link='#online-consultation'
          />
          <ServiceCard
            imageSrc={Service2}
            id='approbation-section'
            icon={<ApprobationIcon boxSize={8} />}
            title='Пакет “Сопровождение по апробации”'
            description='Воспользуйтесь моей поддержкой и подайте заявку на апробацию самостоятельно, избегая затрат на услуги посреднических агентств и сэкономив ваши финансовые ресурсы.'
            cost='Стоимость: 250 евро'
            link='#approbation'
          />
          <ServiceCard
            imageSrc={Service3}
            id='bewerbung-section'
            icon={<BewerbungIcon boxSize={8} />}
            title='Пакет “Цепляющий Bewerbung для немецких работодателей”'
            description='Проанализируем ваши профессиональные цели, создадим резюме и сопроводительное письмо для поиска работы в Германии. Дам рекомендации по поиску вакансий, подготовке к интервью и отправке документов. Поддержу при необходимости доработок.'
            cost='Стоимость: 150 евро'
            link='#bewerbung'
          />
          <ServiceCard
            imageSrc={Service4}
            id='personalsupport-section'
            icon={<PersonalSupportIcon boxSize={8} />}
            title='Личное сопровождение'
            description='Индивидуальный подход, предоставляемый только после личной консультации.'
            cost='Стоимость: по запросу'
            link='#personal-support'
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Services;
