import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProfileInterface {
  id?: string;
  specialization?: string;
  experience?: number;
  qualification?: string;
  working_hours?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  qualification?: string;
  working_hours?: string;
  user_id?: string;
}
