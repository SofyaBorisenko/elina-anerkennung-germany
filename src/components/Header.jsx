import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, HStack, IconButton, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Logo_header_desktop from '../assets/Logo_header_desktop.png';
import '../App.scss';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);
  const submenuRef = useRef(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

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
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false); // Close the submenu
      }
    };

    // Attach the click event listener
    document.body.addEventListener('click', handleOutsideClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isSubmenuOpen]); // Listen for changes in isSubmenuOpen

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
          px={64}
        >
          <Image src={Logo_header_desktop} w='20rem'></Image>
          <nav>
            <HStack spacing={48} align='center'>
              <a href='#about-me' onClick={handleClick('aboutme-section')}>
                Обо мне
              </a>
              <div ref={submenuRef} className='submenu'>
                <a href='#services' onClick={handleClick('services-section')}>
                  Услуги
                </a>
                <IconButton
                  className='chevron-down'
                  aria-label='Options'
                  icon={<ChevronDownIcon />}
                  fontSize='1.5rem'
                  onClick={handleSubmenuToggle}
                />
                {isSubmenuOpen && (
                  <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='flex-end'
                    alignItems='center'
                    position='absolute'
                    backgroundColor='#00000091'
                    top='100%'
                    left={0}
                    zIndex={1}
                    w='100%'
                  >
                    <nav>
                      <HStack h='4.5rem' spacing={0} pr={64}>
                        {/* Submenu items */}
                        <a
                          href='#service1'
                          onClick={handleClick('consultation-section')}
                          className='submenu-link'
                        >
                          Онлайн-консультация
                        </a>
                        <a
                          href='#service2'
                          onClick={handleClick('approbation-section')}
                          className='submenu-link'
                        >
                          Сопровождение по апробации
                        </a>
                        <a
                          href='#service3'
                          onClick={handleClick('bewerbung-section')}
                          className='submenu-link'
                        >
                          Цепляющий Bewerbung
                        </a>
                        <a
                          href='#service4'
                          onClick={handleClick('personalsupport-section')}
                          className='submenu-link'
                        >
                          Личное сопровождение
                        </a>
                      </HStack>
                    </nav>
                  </Box>
                )}
              </div>
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
