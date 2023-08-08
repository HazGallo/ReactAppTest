import { LoginParams } from '../interfaces/LoginParams';
import { useMutation } from 'react-query';

export const useLogin = () => {
  return useMutation<Response, Error, LoginParams>(
    async ({ username, password }) => {
      const response = await fetch(
        'https://dev-user.iseazyengage.com/api/login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      return response.json(); 
    }
  );
};
