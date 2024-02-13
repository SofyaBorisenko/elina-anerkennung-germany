import {
  Box,
  Divider,
  HStack,
  VStack,
  Image,
  Link,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo_header_mobile.webp';
import '../App.scss';

const socials = [
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/profile.php?id=61555562996574',
    al: 'Перейти на Facebook Элины',
  },
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/elina.anerkennung.germany',
    al: 'Перейти в Instagram Элины',
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

  const navLinkStyle = {
    color: '#faf9f6',
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: { base: '0.875rem', '2xl': '1.175rem' },
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
  };

  return (
    <Box
      backgroundColor='#000000'
      h={['auto', null, null, '17rem', null, '18.5rem']}
    >
      <footer>
        <VStack h='auto' px={['1.25rem', '2rem', null, '4rem']}>
          <Flex
            flexDir={['column', null, 'row', null]}
            p='3rem 0'
            w='100%'
            gap='3rem'
            alignItems={['center', null, 'flex-start', 'center']}
            justifyContent='space-between'
          >
            <Link
              href='/'
              onClick={handleClick('hero-section')}
              aria-label='Перейти наверх'
            >
              <Image
                loading='lazy'
                src={Logo}
                w={['12.5rem', null, '11.5rem', null, null, '14rem']}
                alt='Логотип с названием сайта Elina Anerkennung Germany слева и кругом с флагом Германии справа'
              />
            </Link>
            <nav>
              <Flex
                flexDir={['column', null, null, 'row', null]}
                gap={['1rem', null, null, '2.25rem', null]}
                align='center'
              >
                <Link
                  {...navLinkStyle}
                  href='#about-me'
                  onClick={handleClick('aboutme-section')}
                  aria-label='Перейти к разделу "Обо мне"'
                >
                  Обо мне
                </Link>
                <Link
                  {...navLinkStyle}
                  href='#services'
                  onClick={handleClick('services-section')}
                  aria-label='Перейти к разделу "Услуги"'
                >
                  Услуги
                </Link>
                <Link
                  {...navLinkStyle}
                  href='#reviews'
                  onClick={handleClick('reviews-section')}
                  aria-label='Перейти к разделу "Отзывы"'
                >
                  Отзывы
                </Link>
                <Link
                  {...navLinkStyle}
                  href='#contact-me'
                  onClick={handleClick('contactme-section')}
                  aria-label='Перейти к контактной форме'
                >
                  Связаться со мной
                </Link>
              </Flex>
            </nav>
            <nav>
              <HStack
                spacing={['1rem', null, '1.5rem', null, null, '2rem']}
                pl={['0', null, '7.65rem', null, null, '9.65rem']}
              >
                {socials.map((social, index) => (
                  <Link href={social.url} key={index} aria-label={social.al}>
                    <FontAwesomeIcon
                      icon={social.icon}
                      size='lg'
                      color='#faf9f6'
                    />
                  </Link>
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
            <Text
              textAlign='center'
              color='#faf9f6'
              m='0'
              mb={['1rem', null, '0']}
              fontFamily='Manrope'
              fontSize={{ base: '0.875rem', '2xl': '1.125rem' }}
              fontWeight='500'
              lineHeight='150%'
            >
              © 2024 Elina Anerkennung Germany.
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
