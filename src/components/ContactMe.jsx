import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';
import '../App.scss';

const ContactMe = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const phoneRegex =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      type: '',
      comment: '',
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Пожалуйста, введите имя'),
      lastName: Yup.string().required('Пожалуйста, введите фамилию'),
      email: Yup.string()
        .email('Неверный адрес')
        .required('Пожалуйста, введите email'),
      phone: Yup.string()
        .matches(phoneRegex, 'Пожалуйста, введите корректный номер')
        .required('Пожалуйста, введите номер'),
      type: Yup.string().required('Пожалуйста, выберите услугу'),
      comment: Yup.string()
        .min(25, 'Минимум 25 символов')
        .required('Пожалуйста, введите сообщение'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  const headingStyle = {
    as: 'h3',
    maxW: ['100%', '66%', null, '100%'],
    paddingBottom: '1rem',
    fontFamily: 'Cormorant Garamond',
    fontSize: ['2.25rem', null, null, '3.375rem'],
    fontWeight: '700',
    id: 'contactme-section',
  };

  const textStyle = {
    maxW: ['90%', '80%', '60%', '100%'],
    paddingBottom: ['0', null, null, '1rem'],
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: ['0.875rem', null, null, '1rem', null, '1.15rem'],
    fontWeight: '600',
    lineHeight: '100%',
  };

  const labelStyle = {
    mb: ['0.25rem', null, null, '0.5rem'],
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: ['0.875rem', null, null, null, null, '1rem'],
    fontWeight: '500',
    lineHeight: '150%',
  };

  const inputStyle = {
    variant: 'outline',
    w: ['100%', null, null, '15.5rem', null, '20rem'],
    h: '2rem',
    p: '0.5rem',
    backgroundColor: '#faf9f6',
    border: '1px solid #3f3f3fcc',
    borderRadius: '0.25rem',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: ['0.875rem', null, null, null, null, '1rem'],
    fontWeight: '400',
    lineHeight: '150%',
  };

  const errorStyle = {
    overflowWrap: 'break-word',
    color: '#000000',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '150%',
  };

  const placeholderStyle = {
    color: '#3F3F3F',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: ['0.75rem', null, null, null, null, '0.875rem'],
    fontWeight: '300',
    lineHeight: '150%',
    p: '0.25rem',
  };

  const selectStyle = {
    border: '1px solid #3f3f3fcc',
    borderRadius: '0.25rem',
    bg: '#FAF9F6',
    color: '#3F3F3F',
    placeholder: 'Выбрать из списка...',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontSize: '0.75rem',
    fontWeight: '300',
    lineHeight: '150%',
    maxWidth: ['100%', null, null, '32rem', null, '41rem'],
    width: ['100%', null, null, '32rem', null, '41rem'],
    height: '2rem',
  };

  const textAreaStyle = {
    border: '1px solid #3f3f3fcc',
    borderRadius: '0.25rem',
    backgroundColor: '#FAF9F6',
    height: '7.5rem',
    padding: '0.5rem',
  };

  const buttonStyle = {
    backgroundColor: '#dd0000',
    color: '#faf9f6',
    borderRadius: ['0.625rem', null, null, '0.9375rem'],
    border: '2px solid #dd0000',
    fontSize: ['0.875rem', null, null, '1rem'],
    type: 'submit',
    width: ['6.5rem', null, null, '8.75rem'],
    height: ['2rem', null, null, '2.5rem'],
    marginTop: '1.5rem',
    padding: '1.25rem 1.5rem',
    _hover: {
      background: '#faf9f6',
      color: '#dd0000',
      border: '2px solid #dd0000',
    },
    ariaLabel: 'Отправить заявку',
  };

  const [resize, setResize] = React.useState('vertical');

  return (
    <Box
      backgroundColor='#ffce00'
      p={['4rem 1.25rem', '4rem 2rem', '3rem 2rem', '4rem']}
    >
      <VStack alignItems='center' gap='0'>
        <Heading {...headingStyle}>Свяжитесь со мной</Heading>
        <Text {...textStyle}>
          Есть вопрос или хотите заказать консультацию? Смело обращайтесь!
        </Text>
        <Flex
          maxW={['100%', '80%', '100%', null]}
          pt='1.5rem'
          mx={['1rem', null, null, '0']}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing='0.5rem'>
              <Flex
                flexDir={['column', null, 'row', null]}
                w={['100%', null, '', null]}
                gap={['0.5rem', null, '1rem', null]}
                alignItems='flex-start'
              >
                <FormControl
                  isInvalid={
                    !!formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <FormLabel htmlFor='firstName' {...labelStyle}>
                    Имя
                  </FormLabel>
                  <Input
                    id='firstName'
                    name='firstName'
                    placeholder='Ваше имя'
                    {...inputStyle}
                    _placeholder={placeholderStyle}
                    {...formik.getFieldProps('firstName')}
                    autoComplete='given-name'
                  />
                  <FormErrorMessage {...errorStyle}>
                    {formik.errors.firstName}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    !!formik.errors.lastName && formik.touched.lastName
                  }
                >
                  <FormLabel htmlFor='lastName' {...labelStyle}>
                    Фамилия
                  </FormLabel>
                  <Input
                    id='lastName'
                    name='lastName'
                    placeholder='Ваша фамилия'
                    {...inputStyle}
                    _placeholder={placeholderStyle}
                    {...formik.getFieldProps('lastName')}
                    autoComplete='family-name'
                  />
                  <FormErrorMessage {...errorStyle}>
                    {formik.errors.lastName}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex
                flexDir={['column', null, 'row', null]}
                w={['100%', null, '', null]}
                gap={['0.5rem', null, '1rem', null]}
                alignItems='flex-start'
              >
                <FormControl
                  isInvalid={!!formik.errors.email && formik.touched.email}
                >
                  <FormLabel htmlFor='email' {...labelStyle}>
                    Email
                  </FormLabel>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Ваш email'
                    {...inputStyle}
                    _placeholder={placeholderStyle}
                    {...formik.getFieldProps('email')}
                    autoComplete='email'
                  />
                  <FormErrorMessage {...errorStyle}>
                    {formik.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!formik.errors.phone && formik.touched.phone}
                >
                  <FormLabel htmlFor='phone' {...labelStyle}>
                    Телефон
                  </FormLabel>
                  <Input
                    id='phone'
                    name='phone'
                    type='phone'
                    placeholder='Ваш номер'
                    {...inputStyle}
                    _placeholder={placeholderStyle}
                    {...formik.getFieldProps('phone')}
                    autoComplete='tel'
                  />
                  <FormErrorMessage {...errorStyle}>
                    {formik.errors.phone}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex>
                <FormControl
                  isInvalid={formik.touched.type && formik.errors.type}
                >
                  <FormLabel htmlFor='type' {...labelStyle}>
                    Выберите услугу
                  </FormLabel>
                  <Select
                    id='type'
                    name='type'
                    variant='outline'
                    placeholder='Выбрать из списка...'
                    {...selectStyle}
                    {...formik.getFieldProps('type')}
                  >
                    <option value='consultation'>
                      Личная онлайн-консультация
                    </option>
                    <option value='approbation'>
                      Пакет “Сопровождение по апробации”
                    </option>
                    <option value='bewerbung'>
                      Пакет “Цепляющий Bewerbung для немецких работодателей”
                    </option>
                    <option value='personal-support'>
                      Личное сопровождение
                    </option>
                  </Select>
                  <FormErrorMessage {...errorStyle}>
                    {formik.errors.type}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor='comment' {...labelStyle}>
                  Сообщение
                </FormLabel>
                <Textarea
                  id='comment'
                  name='comment'
                  placeholder='Введите сообщение...'
                  variant='outline'
                  _placeholder={placeholderStyle}
                  {...textAreaStyle}
                  resize={resize}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage {...errorStyle}>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button {...buttonStyle} isLoading={isLoading}>
                Отправить
              </Button>
            </VStack>
          </form>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ContactMe;
