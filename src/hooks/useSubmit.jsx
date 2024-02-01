import { useState } from 'react';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error('Что-то пошло не так...');
      }
      setResponse({
        type: 'success',
        message: `Спасибо, что связались со мной, ${data.firstName}. Я отвечу вам в ближайшее время.`,
      });
    } catch (error) {
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
