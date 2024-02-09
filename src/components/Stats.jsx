import { Text, Stat, Flex, VStack } from '@chakra-ui/react';
import '../App.scss';

const statsData = [
  [
    {
      label: '15 лет',
      text: 'Опыт работы в ООН, Human Rights Watch, GIZ, The World Bank и UN Women',
    },
    {
      label: '3 года',
      text: 'Опыт работы в немецкой организации по поддержке мигрантов и беженцев',
    },
    { label: '13 лет', text: 'Мой личный опыт иммиграции в Германии' },
  ],
  [
    {
      label: '30 человек',
      text: 'В месяц я консультировала по вопросам признания, апробации, визы и учёбы',
    },
    {
      label: '200 дипломов',
      text: 'Я помогла признать как иммиграционный консультант в Германии',
    },
    {
      label: '300 сессий',
      text: 'Я провела по процедурам признания, апробации и трудоустройству',
    },
  ],
];

const renderStats = (data, outerIndex) => (
  <Flex
    flexDir={['column', null, 'row']}
    justify='flex-start'
    align='flex-start'
    alignSelf='stretch'
    gap={['2rem', null, null, '3.5rem']}
    key={outerIndex} // Sets key for the outer Flex component
  >
    {data.map((stat, innerIndex) => (
      <Stat
        key={`${outerIndex}-${innerIndex}`} // Concatenates outerIndex and innerIndex for a unique key
        borderLeft='3px solid #000000'
        pl={['1rem', null, null, '2rem']}
      >
        <Text
          alignSelf='stretch'
          fontFamily='Manrope'
          fontWeight='800'
          fontSize={['1.5rem', null, null, '1.75rem', null, '2.175rem']}
          fontStyle='normal'
          lineHeight='100%'
          my={['0.5rem', null, null, '1rem', null, '1.5rem']}
        >
          {stat.label}
        </Text>
        <Text
          alignSelf='stretch'
          fontFamily='Manrope'
          fontWeight='800'
          fontSize={['1rem', null, '0.875rem', '1rem', null, '1.375rem']}
          fontStyle='normal'
          lineHeight='150%'
          my={['0.5rem', null, null, '1rem', null, '1.5rem']}
        >
          {stat.text}
        </Text>
      </Stat>
    ))}
  </Flex>
);

const Stats = () => {
  return (
    <VStack
      p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem', '4rem']}
      direction='column'
      justify='flex-start'
      align='flex-start'
      spacing={['2rem', null, '3rem']}
      overflow='hidden'
      background='#ffce00'
    >
      {statsData.map((data, index) => renderStats(data, index))}
    </VStack>
  );
};

export default Stats;
