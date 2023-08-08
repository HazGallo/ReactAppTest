import { FileDropperParams } from '../interface/FileDropperParams';
import { useMutation } from 'react-query';

interface UploadResponse {
  success: boolean;
  message: string;
  path: string;
}

export const useFileDropper = () => {
  return useMutation<UploadResponse, Error, FileDropperParams>(
    async ({ path }) => {
      try {
        const formData = new FormData();
        formData.append('file', path);

        const response = await fetch(
          'https://api.iseazy.new-manager.ngrok.dev/api/v1/tmp/upload',
          {
            method: 'POST',
            headers: {
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODIzMzc2NzksImV4cCI6MTcxMzg3MzY3OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiaXNlYXp5In0.dS6eKPiPy-KMMSE_5TV3clOnxsnz9CXCP5lWwb9bcedUXgFyVm9q4fUEMDtLsADYmR9I70I18KNot2CaezaQwNfuHuGPR0H0byQynupy6FsCBl910v4X7aWftd-MLcb7BOr_JaZtVH2816S4FzpmclKymLZI2gZFsX937ZMX1K1ZuGjz7Rvn5ZZ0Df8hbA68h9bU-ZuJixML_cwVkuX1LQkZnbawb17gNs0MRy2nnknkGRd4RF5j4YsRxY83-ZRYvvhHsjoio8-quF_shzCCLtpFRPn917CwjnVVMFjVn0bTEi2JFIjTyVp6NAqpt4jBIhG1_xzMD908o57iOGkrMQ',
            },
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Failed to upload file');
        }

        return await response.json();
      } catch (error) {
        throw new Error('Error occurred during file upload');
      }
    }
  );
};
