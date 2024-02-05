import {
  Box,
  Divider,
  HStack,
  VStack,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo_header_mobile.png';
import '../App.scss';

const socials = [
  {
    icon: faFacebook,
    url: 'https://facebook.com',
  },
  {
    icon: faInstagram,
    url: 'https://instagram.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
];

const Footer = () => {
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
    <Box backgroundColor='#000000' h={['auto', null, null, '16rem']}>
      <footer>
        <VStack h='auto' px={['1.25rem', '2rem', null, '4rem']}>
          <Flex
            flexDir={['column', null, 'row', null]}
            p='3rem 0'
            w='100%'
            gap='3rem'
            alignItems='center'
            justifyContent='space-between'
          >
            <Image src={Logo} w={['12.5rem', null, '10rem', null]}></Image>
            <nav>
              <Flex
                flexDir={['column', null, 'row', null]}
                gap={['1rem', null, '2.25rem', null]}
                align='center'
              >
                <a href='#about-me' onClick={handleClick('aboutme-section')}>
                  Обо мне
                </a>
                <a href='#services' onClick={handleClick('services-section')}>
                  Услуги
                </a>
                <a href='#reviews' onClick={handleClick('reviews-section')}>
                  Отзывы
                </a>
                <a
                  href='#contact-me'
                  onClick={handleClick('contactme-section')}
                >
                  Связаться со мной
                </a>
              </Flex>
            </nav>
            <nav>
              <HStack
                spacing={['1rem', null, '1.5rem', null]}
                pl={['0', null, '4.59375rem', null]}
              >
                {socials.map((social, index) => (
                  <a href={social.url} key={index}>
                    <FontAwesomeIcon icon={social.icon} size='1x' />
                  </a>
                ))}
              </HStack>
            </nav>
          </Flex>
          <Divider
            orientation='horizontal'
            height='1.5px'
            background='#faf9f6'
          />
          <Flex
            margin='0 auto'
            py='1rem'
            color='white'
            justifyContent='center'
            alignItems='center'
          >
            <Text textAlign='center' mb={['1rem', null, '0', null]}>
              © 2023 Elina Anerkennung Germany.
              <br />
              All rights reserved.
            </Text>
          </Flex>
        </VStack>
      </footer>
    </Box>
  );
};
export default Footer;
