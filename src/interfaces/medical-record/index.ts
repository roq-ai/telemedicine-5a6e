import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  diagnosis: string;
  prescription: string;
  date_of_visit: any;
  next_visit_date?: any;
  doctor_id?: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  user_medical_record_doctor_idTouser?: UserInterface;
  user_medical_record_customer_idTouser?: UserInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  diagnosis?: string;
  prescription?: string;
  doctor_id?: string;
  customer_id?: string;
}
