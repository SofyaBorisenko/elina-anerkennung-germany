import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import '../assets/Benefits.JPG';
import '../App.scss';
import './Benefits.css';

const BenefitItem = ({ title, description }) => (
  <HStack alignItems='flex-start' gap='1rem'>
    <CheckIcon color='#dd0000' fontSize='2rem' />
    <VStack alignItems='flex-start' h='11rem' gap='1rem'>
      <Heading
        as='h6'
        fontFamily='Cormorant Garamond'
        lineHeight='140%'
        fontWeight='700'
        fontSize='1.75rem'
        fontStyle='normal'
        color='#000000'
      >
        {title}
      </Heading>
      <Text
        fontFamily='Manrope'
        lineHeight='150%'
        fontWeight='400'
        fontSize='1rem'
        fontStyle='normal'
        color='#000000'
      >
        {description}
      </Text>
    </VStack>
  </HStack>
);

const Benefits = () => (
  <Box w='100%' position='sticky'>
    <div className='yellow-divider'></div>
    <div className='benefits_background'>
      <Flex justifyContent='center' pb='3rem'>
        <h2 className='highlighted-heading'>Преимущества</h2>
      </Flex>
      <HStack gap='2rem'>
        <VStack gap='2rem'>
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
        <VStack gap='2rem'>
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
      </HStack>
    </div>
    <div className='yellow-divider'></div>
  </Box>
);

export default Benefits;
