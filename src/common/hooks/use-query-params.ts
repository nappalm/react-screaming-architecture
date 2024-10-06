import { useLocation } from 'react-router-dom';

export function useQueryParams() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getParam = <T extends string | number | boolean>(
    param: string,
    defaultValue: T,
  ): T => {
    const value = searchParams.get(param);
    if (value === null) {
      return defaultValue;
    }

    if (typeof defaultValue === 'number') {
      return (isNaN(Number(value)) ? defaultValue : Number(value)) as T;
    }

    if (typeof defaultValue === 'boolean') {
      return (value === 'true') as T;
    }

    return value as T;
  };

  return { getParam };
}
