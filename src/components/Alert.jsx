import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext.jsx';
import { useRef } from 'react';

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === 'success';

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? '#c8ebc8' : '#f1c4b6'}
        >
          <AlertDialogHeader
            p='0.5rem 1.5rem'
            color='#000000'
            fontFamily='Manrope'
            fontStyle='normal'
            fontSize='1rem'
            fontWeight='800'
            lineHeight='130%'
          >
            {isSuccess
              ? 'Получилось!'
              : 'Что-то пошло не так...'}
          </AlertDialogHeader>
          <AlertDialogBody
            color='#000000'
            fontFamily='Manrope'
            fontStyle='normal'
            fontSize='0.875rem'
            fontWeight='500'
            lineHeight='130%'
          >
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
