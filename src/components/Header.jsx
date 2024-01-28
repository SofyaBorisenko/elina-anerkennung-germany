import React, { useEffect, useRef, useState } from 'react';
import { Box, HStack, IconButton, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Logo_header_desktop from '../assets/Logo_header_desktop.png';
import '../App.scss';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

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

  return (
    <header>
      <Box
        position='fixed'
        top={0}
        left={0}
        right={0}
        transitionProperty='transform'
        transitionDuration='.3s'
        transitionTimingFunction='ease-in-out'
        backgroundColor='#000000'
        transform={visible ? 'translateY(0)' : 'translateY(-9rem)'}
        ref={headerRef}
        h='4.5rem'
      >
        <HStack
          justifyContent='space-between'
          alignItems='center'
          h='100%'
          px={'4rem'}
        >
          <Image src={Logo_header_desktop} w='20rem'></Image>
          <nav>
            <HStack spacing={'3rem'} align='center'>
              <a href='#about-me' onClick={handleClick('aboutme-section')}>
                Обо мне
              </a>

              <a href='#services' onClick={handleClick('services-section')}>
                Услуги
              </a>

              <a href='#reviews' onClick={handleClick('reviews-section')}>
                Отзывы
              </a>
              <a href='#contact-me' onClick={handleClick('contactme-section')}>
                Связаться со мной
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </header>
  );
};

export default Header;
