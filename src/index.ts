import { useHistory } from 'react-router';
import { parse, stringify } from 'query-string';
import { useMemo } from 'react';

export interface Query {
  params: Record<string, any>;
  push: (params: {}) => void;
  replace: (params: {}) => void;
}

export const useQuery = (): Query => {
  const history = useHistory();
  const params: Record<string, any> = useMemo(() => {
    const parsed: Record<string, any> = parse(history.location.search);
    return parsed;
  }, [history.location]);
  return {
    params: params,
    push: (replace: {}) => {
      history.push({ search: stringify({ ...params, ...replace }) });
    },
    replace: (replace: {}) => {
      history.replace({ search: stringify({ ...params, ...replace }) });
    },
  };
};
