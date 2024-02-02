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
  Divider,
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
      borderRadius={['0px', '1.5rem']}
      width={['100%', '16.5rem']}
      height={['auto', '37rem']}
      background='#faf9f6'
      boxShadow={['none', '4px 4px 4px 0px rgba(0, 0, 0, 0.4)']}
      border={['none', '1px solid #3f3f3fcc']}
    >
      <Image
        src={imageSrc}
        borderTopRadius={['0px', '1.5rem']}
        maxW='100%'
        h={['20rem', '40%']}
        objectFit='cover'
      />
      <VStack h={['auto', '60%']}>
        <CardBody px={['0', '1.25rem']} py={['0.75rem', '1.25rem']}>
          <VStack
            h={['auto', '5.5rem']}
            py={['0.75rem', '0']}
            alignItems='flex-start'
          >
            {icon}
            <Heading
              as='h5'
              fontFamily='Manrope'
              lineHeight='120%'
              fontWeight='700'
              fontSize={['1.125rem', '0.75rem']}
              color='#000000'
            >
              {title}
            </Heading>
          </VStack>
          <VStack
            h={['fit-content', '14.5rem']}
            alignItems='flex-start'
            justifyContent={['space-around', 'space-between']}
            gap={['0.75rem', '0']}
          >
            <VStack
              h={['auto', '11.5rem']}
              alignItems='flex-start'
              justifyContent='space-between'
              gap={['0.75rem', '0']}
            >
              <Text
                fontFamily='Manrope'
                lineHeight='140%'
                fontWeight='500'
                fontSize={['1rem', '0.75rem']}
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
                fontSize={['1rem', '0.75rem']}
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
                fontSize={['1rem', '0.75rem']}
                color='#000000'
                textDecoration='none'
              >
                Узнать подробнее
              </Text>
              <IconButton
                href={link}
                onClick={handleClick(id)}
                icon={
                  <ArrowForwardIcon
                    color='#dd0000'
                    fontSize={['1.25rem', '1rem']}
                  />
                }
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
      p={['4rem 1.25rem', '4rem']}
    >
      <Flex justifyContent={['left', 'center']} pb='1rem'>
        <h2 className='highlighted-heading' id='services-section'>
          Услуги
        </h2>
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        backgroundColor='#faf9f6'
        py={['0', '2rem']}
      >
        <Flex
          flexDir={['column', 'row']}
          justifyContent='space-between'
          alignItems='center'
          gap='1.5rem'
        >
          <ServiceCard
            imageSrc={Service1}
            id='consultation-section'
            icon={<ConsultationIcon boxSize={[10, 8]} />}
            title='Личные онлайн-консультации'
            description={
              'Консультация доступна по следующим запросам: 1) апробация, 2) процедура признания диплома в Германии, 3) поступление в штудиенколлег'
            }
            duration='Длительность: 1 час'
            cost='Стоимость: 60 евро'
            link='#online-consultation'
          />
          <Divider
            display={['block', 'none']}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service2}
            id='approbation-section'
            icon={<ApprobationIcon boxSize={[10, 8]} />}
            title='Пакет “Сопровождение по апробации”'
            description='Воспользуйтесь моей поддержкой и подайте заявку на апробацию самостоятельно, избегая затрат на услуги посреднических агентств и сэкономив ваши финансовые ресурсы.'
            cost='Стоимость: 250 евро'
            link='#approbation'
          />
          <Divider
            display={['block', 'none']}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service3}
            id='bewerbung-section'
            icon={<BewerbungIcon boxSize={[10, 8]} />}
            title='Пакет “Цепляющий Bewerbung для немецких работодателей”'
            description='Проанализируем ваши профессиональные цели, создадим резюме и сопроводительное письмо для поиска работы в Германии. Дам рекомендации по поиску вакансий, подготовке к интервью и отправке документов. Поддержу при необходимости доработок.'
            cost='Стоимость: 150 евро'
            link='#bewerbung'
          />
          <Divider
            display={['block', 'none']}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service4}
            id='personalsupport-section'
            icon={<PersonalSupportIcon boxSize={[10, 8]} />}
            title='Личное сопровождение'
            description='Индивидуальный подход, предоставляемый только после личной консультации.'
            cost='Стоимость: по запросу'
            link='#personal-support'
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Services;
