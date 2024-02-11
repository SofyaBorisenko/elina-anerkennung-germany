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
  const h5Style = {
    as: 'h5',
    fontFamily: 'Manrope',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: ['1.125rem', null, null, null, '0.875rem', '1.125rem'],
    color: '#000000',
  };
  const cardTextStyle = {
    fontFamily: 'Manrope',
    lineHeight: '140%',
    fontWeight: '500',
    fontSize: ['1rem', null, null, null, '0.785rem', '0.925rem'],
    color: '#000000',
    gap: '0px',
    margin: '0',
  };
  return (
    <Card
      direction={['column', null, 'row', null, 'column']}
      borderRadius={['0px', null, '1.5rem']}
      width={['100%', null, null, null, '16.5rem', '20rem']}
      height={['auto', null, '21rem', '22rem', '40rem', '42rem']}
      background='#faf9f6'
      boxShadow={[
        'none',
        null,
        '4px 4px 4px 0px rgba(0, 0, 0, 0.4)',
        null,
        null,
      ]}
      border={['none', null, '1px solid #3f3f3fcc']}
    >
      <Image
        src={imageSrc}
        borderTopRadius={['0', null, null, null, '1.5rem']}
        borderTopLeftRadius={['0', null, '1.5rem']}
        borderBottomLeftRadius={['0', null, '1.5rem', null, '0']}
        maxW='100%'
        h={['20rem', null, '21rem', '22rem', '40%', '38%']}
        objectFit='cover'
      />
      <VStack
        h={['auto', null, '21rem', '22rem', '60%', '62%']}
        alignItems='flex-start'
      >
        <CardBody
          h='100%'
          px={['0', null, '1.5rem', null, '1.25rem']}
          py={['0.75rem', null, '1.5rem', null, '1.25rem']}
        >
          <VStack
            h={['auto', null, '6.25rem', '5rem', '6.5rem', '7.5rem']}
            pt={['0.75rem', null, '0']}
            alignItems='flex-start'
          >
            {icon}
            <Heading {...h5Style}>{title}</Heading>
          </VStack>
          <VStack
            h={['fit-content', null, '11.5rem', '14rem', '15.5rem', '16.25rem']}
            alignItems='flex-start'
            justifyContent={['space-around', null, 'space-between', null, null]}
            gap={['0.75rem', null, null, '0.5rem', null, null]}
          >
            <VStack
              h={['auto', 'null', '9.25rem', '12rem', '13rem', '13.5rem']}
              alignItems='flex-start'
              justifyContent='space-between'
              gap={['0.75rem', null, '0', null, null]}
            >
              <Text {...cardTextStyle}>{description}</Text>
              <Text {...cardTextStyle}>
                {duration}
                <br />
                {cost}
              </Text>
            </VStack>
            <HStack
              alignItems='center'
              h={['1.25rem', null, null, '2rem']}
              gap='0'
            >
              <Text {...cardTextStyle}>Узнать подробнее</Text>
              <IconButton
                bg='transparent'
                href={link}
                onClick={handleClick(id)}
                icon={
                  <ArrowForwardIcon
                    color='#dd0000'
                    fontSize={['1.25rem', null, null, null, null, '1.5rem']}
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
  const h2Style = {
    as: 'h2',
    id: 'services-section',
    marginBottom: '1.25rem',
    fontFamily: 'Cormorant Infant',
    fontSize: ['2.5rem', null, null, '3rem', null, '3.25rem'],
    fontWeight: '700',
    lineHeight: '120%',
    textTransform: 'uppercase',
  };
  return (
    <Box
      alignItems='center'
      backgroundColor='#faf9f6'
      position='sticky'
      p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem', '4rem']}
    >
      <Flex
        justifyContent={['left', null, 'center']}
        pb={['1rem', null, '0', null, '1rem']}
      >
        <Heading {...h2Style} className='highlighted-heading'>
          Услуги
        </Heading>
      </Flex>
      <Flex
        flexDir={['column', null, null, null, 'row']}
        justifyContent='center'
        backgroundColor='#faf9f6'
        py={['0', null, '2rem']}
      >
        <Flex
          flexDir={['column', null, null, null, 'row']}
          justifyContent='space-between'
          alignItems='center'
          gap={['1.5rem', null, null, null, null, '2rem']}
        >
          <ServiceCard
            imageSrc={Service1}
            id='consultation-section'
            icon={<ConsultationIcon boxSize={[10, null, null, null, 8]} />}
            title='Личные онлайн-консультации'
            description={
              'Консультация доступна по следующим запросам: 1) апробация, 2) процедура признания диплома в Германии, 3) поступление в штудиенколлег'
            }
            duration='Длительность: 1 час'
            cost='Стоимость: 60 евро'
            link='#online-consultation'
          />
          <Divider
            display={['block', null, 'none', null, null]}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service2}
            id='approbation-section'
            icon={<ApprobationIcon boxSize={[10, null, null, null, 8]} />}
            title='Пакет “Сопровождение по апробации — от сбора до отправки”'
            description='Воспользуйтесь моей поддержкой и подайте заявку на апробацию самостоятельно, избегая затрат на услуги посреднических агентств и сэкономив ваши финансовые ресурсы.'
            cost='Стоимость: 250 евро'
            link='#approbation'
          />
          <Divider
            display={['block', null, 'none', null, null]}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service3}
            id='bewerbung-section'
            icon={<BewerbungIcon boxSize={[10, null, null, null, 8]} />}
            title='Пакет “Цепляющий Bewerbung для немецких работодателей”'
            description='Проанализируем ваши профессиональные цели, создадим резюме и сопроводительное письмо для поиска работы в Германии. Дам рекомендации по поиску вакансий, подготовке к интервью и отправке документов. Поддержу при необходимости доработок.'
            cost='Стоимость: 150 евро'
            link='#bewerbung'
          />
          <Divider
            display={['block', null, 'none', null, null]}
            orientation='horizontal'
            w='100%'
            h='1px'
            my='0'
            bg='#000'
          />
          <ServiceCard
            imageSrc={Service4}
            id='personalsupport-section'
            icon={<PersonalSupportIcon boxSize={[10, null, null, null, 8]} />}
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
