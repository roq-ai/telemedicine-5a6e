import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  location: yup.string().required(),
  doctor_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
