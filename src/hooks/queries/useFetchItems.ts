import { useQuery } from '@tanstack/react-query';
import { CosmicObject } from '@/types/cosmic';
import { fetchItems } from '@/services/axios/fetchItems';

export const useFetchItems = () =>
  useQuery<CosmicObject[]>(['items'], fetchItems);
