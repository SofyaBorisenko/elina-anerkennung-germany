import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import BenefitsBg from '../assets/Benefits.webp';
import '../App.scss';

const BenefitItem = ({ title, description }) => (
  <HStack alignItems='flex-start' gap='1rem' justifyContent='center'>
    <CheckIcon color='#dd0000' fontSize={['1.5rem', null, null, '2rem']} />
    <VStack
      maxW={['100%', null, '80%', '100%']}
      alignItems='flex-start'
      h={['auto', null, null, '14rem', '11rem', '13.25rem']}
      gap='1rem'
      justifyContent={['flex-start', null, 'center', 'flex-start']}
    >
      <Heading
        as='h6'
        fontFamily='Cormorant Garamond'
        lineHeight={['120%', null, null, '140%']}
        fontWeight='700'
        fontSize={['1.575rem', null, null, '1.75rem', null, '2rem']}
        fontStyle='normal'
        color='#000000'
      >
        {title}
      </Heading>
      <Text
        fontFamily='Manrope'
        lineHeight='150%'
        fontWeight='400'
        fontSize={['1rem', null, null, null, null, '1.25rem']}
        fontStyle='normal'
        color='#000000'
      >
        {description}
      </Text>
    </VStack>
  </HStack>
);

const bgStyle = {
  width: '100%',
  height: '100%',
  p: [
    '4rem 1.25rem',
    '4rem 2rem',
    '3rem 2rem 5rem 2rem',
    '4rem 4rem 7rem 4rem',
  ],
  background: `linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url(${BenefitsBg}), #faf9f6 50%`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'sticky',
  top: 0,
  right: 0,
  zIndex: -1,
};

const h2Style = {
  marginBottom: '1.25rem',
  fontFamily: 'Cormorant Infant',
  fontSize: ['2.5rem', null, null, '3rem', null, '3.25rem'],
  fontWeight: '700',
  lineHeight: '120%',
  textTransform: 'uppercase',
};

const Benefits = () => (
  <Box w='100%'>
    <Box
      display={['none', null, 'block', null]}
      className='yellow-divider'
    ></Box>
    <Box {...bgStyle}>
      <Flex justifyContent='center' pb={['1rem', null, '2rem', '3rem']}>
        <Heading as='h2' {...h2Style} className='highlighted-heading'>
          Преимущества
        </Heading>
      </Flex>
      <Flex
        flexDir={['column', null, null, 'row']}
        gap={['1rem', null, '1.5rem', '2rem']}
      >
        <VStack
          gap={['1rem', null, '1.5rem', '2rem']}
          w={['', null, null, '50%']}
        >
          {[
            {
              title: 'Индивидуальный подход',
              description:
                'Уделяю особое внимание каждому клиенту, изучая его профессиональный бэкграунд и анализируя диплом. Это позволяет мне лучше понять ваши потребности и цели, чтобы предоставить наиболее релевантные и персонализированные рекомендации.',
            },
            {
              title: 'Подготовка к собеседованию',
              description:
                'Если вы ищете работу в Германии, я помогу вам подготовиться к собеседованию на немецком или на английском языке. Проведу с вами тренировочные сессии, где мы рассмотрим типичные вопросы, и дам рекомендации по эффективным стратегиям ответа.',
            },
            {
              title: 'Оценка опыта работы',
              description:
                'Проведу оценку вашего опыта работы, чтобы выявить сильные стороны и навыки, которые могут быть полезны при поиске работы или продолжении образования в Германии.',
            },
          ].map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </VStack>
        <VStack
          gap={['1rem', null, '1.5rem', '2rem']}
          w={['', null, null, '50%']}
        >
          {[
            {
              title: 'Детальный анализ',
              description:
                'Проведу детальный анализ вашего диплома, чтобы определить его соответствие требованиям подтверждения в Германии. Помогу вам разобраться в необходимых процедурах и документах для успешного признания вашей квалификации.',
            },
            {
              title: 'План действий',
              description:
                'На основе вашей профессиональной биографии и целей помогу вам разработать конкретный план действий. Это может включать определение необходимых шагов для достижения вашей цели, таких как образование, получение лицензий или поиск работы.',
            },
            {
              title: 'Ориентация на рынок труда',
              description:
                'Ориентируясь на текущие требования рынка труда Германии, помогу вам определить области, где есть возможности для вашего профессионального роста. Предоставлю информацию о перспективах работы и требованиях к навыкам, чтобы вы могли принять грамотное решение о своем будущем.',
            },
          ].map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </VStack>
      </Flex>
    </Box>
    <Box
      display={['none', null, 'block', null]}
      className='yellow-divider'
    ></Box>
  </Box>
);

export default Benefits;
