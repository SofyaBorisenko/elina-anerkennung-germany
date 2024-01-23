import { Box, Divider, HStack, VStack, Image, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Logo_footer_desktop from '../assets/Logo_footer_desktop.png';
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
    <Box backgroundColor='#000000' h='16rem'>
      <footer>
        <VStack h='100%' px={64}>
          <HStack p='3rem 0' w='100%' justifyContent='space-between'>
            <Image src={Logo_footer_desktop} w='10rem'></Image>
            <nav>
              <HStack spacing={36} align='center'>
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
              </HStack>
            </nav>
            <nav>
              <HStack>
                {socials.map((social, index) => (
                  <a href={social.url} key={index}>
                    <FontAwesomeIcon icon={social.icon} size='1x' />
                  </a>
                ))}
              </HStack>
            </nav>
          </HStack>
          <Divider
            orientation='horizontal'
            height='1.5px'
            background='#faf9f6'
          />
          <Flex
            margin='0 auto'
            py={16}
            color='white'
            justifyContent='center'
            alignItems='center'
          >
            <p>© 2023 Elina Anerkennung Germany. All rights reserved.</p>
          </Flex>
        </VStack>
      </footer>
    </Box>
  );
};
export default Footer;
