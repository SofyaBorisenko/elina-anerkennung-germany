import { useState } from 'react';
import emailjs from '@emailjs/browser';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      // Simulating a submission delay
      await wait(2000);

      // Send email using Email.js
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        type: data.type,
        comment: data.comment,
      };

      const emailResult = await emailjs.send(
        'service_va1yv0r',
        'template_8bdekwl',
        templateParams,
        '_DKY0vGjxSBgFICXn'
      );

      // If email sending was successful
      if (emailResult.status === 200) {
        setResponse({
          type: 'success',
          message: `Спасибо, что связались со мной, ${data.firstName}. Я отвечу вам в ближайшее время.`,
        });
      } else {
        throw new Error('Сообщение не было отправлено.');
      }
    } catch (error) {
      // Handling actual errors
      setResponse({
        type: 'error',
        message: 'Пожалуйста, попробуйте снова.',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
