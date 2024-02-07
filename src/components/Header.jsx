import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Image, HStack, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useGlobalContext } from './Context';
import DesktopLogo from '../assets/Logo_header_desktop.png';
import MobileLogo from '../assets/Logo_header_mobile.png';
import '../App.scss';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);
  const { openSidebar } = useGlobalContext();

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

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navLinkStyle = {
    color: '#faf9f6',
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: { base: '1rem', '2xl': '1.25rem' },
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '150%',
  };

  return (
    <header>
      {/* Mobile Version */}
      <Box
        display={{ base: 'block', md: 'none' }}
        backgroundColor='#000000'
        h='3.75rem'
        px={['0.5rem', '2rem']}
        position='fixed'
        top={0}
        left={0}
        right={0}
        transitionProperty='transform'
        transitionDuration='.3s'
        transitionTimingFunction='ease-in-out'
        transform={visible ? 'translateY(0)' : 'translateY(-7.5rem)'}
        ref={headerRef}
        zIndex='1'
      >
        <HStack justifyContent='space-between' alignItems='center' gap='0'>
          =
          <IconButton
            bg='#000'
            color='#faf9f6'
            onClick={openSidebar}
            icon={<HamburgerIcon />}
            fontSize={'2.25rem'}
            _hover={{ background: '#000' }}
          />
          <Image src={MobileLogo} maxW='8.75rem' />
        </HStack>
      </Box>
      {/* Full-Screen Version */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position='fixed'
        top={0}
        left={0}
        right={0}
        transitionProperty='transform'
        transitionDuration='.3s'
        transitionTimingFunction='ease-in-out'
        backgroundColor='#000000'
        transform={visible ? 'translateY(0)' : 'translateY(-6rem)'}
        ref={headerRef}
        h={{ md: '4.5rem', '2xl': '6rem' }}
        zIndex='1'
      >
        <HStack
          justifyContent='space-between'
          alignItems='center'
          h='100%'
          px={{ md: '2rem', lg: '4rem' }}
        >
          <Image
            src={DesktopLogo}
            w={{ md: '16rem', lg: '20rem', '2xl': '24rem' }}
          />
          <nav>
            <HStack
              spacing={{ md: '1rem', lg: '3rem', '2xl': '4rem' }}
              align='center'
            >
              <Link
                href='#about-me'
                onClick={handleClick('aboutme-section')}
                {...navLinkStyle}
              >
                Обо мне
              </Link>
              <Link
                href='#services'
                onClick={handleClick('services-section')}
                {...navLinkStyle}
              >
                Услуги
              </Link>
              <Link
                href='#reviews'
                onClick={handleClick('reviews-section')}
                {...navLinkStyle}
              >
                Отзывы
              </Link>
              <Link
                href='#contact-me'
                onClick={handleClick('contactme-section')}
                {...navLinkStyle}
              >
                Связаться со мной
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </header>
  );
};

export default Header;
