import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  specialization: yup.string().nullable(),
  experience: yup.number().integer().nullable(),
  qualification: yup.string().nullable(),
  working_hours: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
