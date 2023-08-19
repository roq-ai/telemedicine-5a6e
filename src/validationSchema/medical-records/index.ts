import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  prescription: yup.string().required(),
  date_of_visit: yup.date().required(),
  next_visit_date: yup.date().nullable(),
  doctor_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
