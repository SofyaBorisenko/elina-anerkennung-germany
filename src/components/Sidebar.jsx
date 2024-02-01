import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import { Box, Button, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
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
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <Box position='relative'>
        <nav className='sidebar-nav'>
          <VStack alignItems='flex-start' p='1rem' gap='1rem'>
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
              Связаться<br /> со мной
            </a>
          </VStack>
        </nav>
        <Button
          p='0'
          bg='transparent'
          border='transparent'
          color='#000'
          boxShadow='none'
          position='absolute'
          top='0.25rem'
          right='0.25rem'
          fontSize='1.5rem'
          onClick={closeSidebar}
        >
          <FaTimes />
        </Button>
      </Box>
    </aside>
  );
};
export default Sidebar;
