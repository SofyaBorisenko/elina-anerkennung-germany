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
            <a
              href='#about-me'
              onClick={handleClick('aboutme-section')}
              aria-label='Перейти к разделу "Обо мне"'
            >
              Обо мне
            </a>
            <a
              href='#services'
              onClick={handleClick('services-section')}
              aria-label='Перейти к разделу "Услуги"'
            >
              Услуги
            </a>
            <a
              href='#reviews'
              onClick={handleClick('reviews-section')}
              aria-label='Перейти к разделу "Отзывы"'
            >
              Отзывы
            </a>
            <a
              href='#contact-me'
              onClick={handleClick('contactme-section')}
              aria-label='Перейти к контактной форме'
            >
              Связаться
              <br /> со мной
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
          id='al'
          aria-label='Кнопка закрытия бокового меню'
        >
          <FaTimes />
        </Button>
      </Box>
    </aside>
  );
};
export default Sidebar;
