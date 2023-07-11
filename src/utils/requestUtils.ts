type Request = {
  endpoint: string;
  method?: Method;
  body?: string | null;
};
type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

const verifyResponse = (response: Response) => {
  if (!response.ok)
    return response.text().then((text: string) => {
      const { error } = JSON.parse(text) as Record<string, string>;
      throw new Error(error);
    });

  return response;
};

const attempBody = (_: Response) => _.json();

const attemptApiRequest = ({
  endpoint,
  method = 'GET',
  body = null
}: Request) =>
  fetch(`${import.meta.env.VITE_COUNTRIES_API_URL}${endpoint}`, {
    method,
    body
  });

const handleFailure = (err: { message: string }) => ({ error: err.message });

export default { verifyResponse, attempBody, attemptApiRequest, handleFailure };
