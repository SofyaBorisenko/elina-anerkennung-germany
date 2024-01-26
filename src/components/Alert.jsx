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
      <AlertDialogOverlay w='32rem'>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? '#bcd4b9' : '#d44300'}
        >
          <AlertDialogHeader fontWeight='bold'>
            {isSuccess
              ? 'Получилось!'
              : 'Что-то пошло не так. Попробуйте снова.'}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
