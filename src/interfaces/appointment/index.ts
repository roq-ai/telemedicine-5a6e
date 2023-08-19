import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  location: string;
  doctor_id?: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_doctor_idTouser?: UserInterface;
  user_appointment_customer_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  doctor_id?: string;
  customer_id?: string;
}
