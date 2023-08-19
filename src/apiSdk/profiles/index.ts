import axios from 'axios';
import queryString from 'query-string';
import { ProfileInterface, ProfileGetQueryInterface } from 'interfaces/profile';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProfiles = async (query?: ProfileGetQueryInterface): Promise<PaginatedInterface<ProfileInterface>> => {
  const response = await axios.get('/api/profiles', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProfile = async (profile: ProfileInterface) => {
  const response = await axios.post('/api/profiles', profile);
  return response.data;
};

export const updateProfileById = async (id: string, profile: ProfileInterface) => {
  const response = await axios.put(`/api/profiles/${id}`, profile);
  return response.data;
};

export const getProfileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProfileById = async (id: string) => {
  const response = await axios.delete(`/api/profiles/${id}`);
  return response.data;
};
