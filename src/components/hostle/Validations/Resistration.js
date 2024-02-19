import * as yup from 'yup'

export const ResistrationSchema = yup.object({
    name:yup.string().min(2).max(13).required("Name is required"),
    email:yup.string().email().required("email is required"),
    id:yup.string().min(4).max(13).required("id is required"),
    year:yup.string().min(1).max(1).required("year is required"),
    phone:yup.string().min(10).max(10).required("phone is required"),
})