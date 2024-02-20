import * as Yup from 'yup'



export const ResistrationSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Name is required"),
    email:Yup.string().email().required("email is required"),
    year:Yup.string().min(1).max(1).required("year is required"),
    id:Yup.string().min(4).max(13).required("id is required"),
    phone:Yup.string().min(10).max(10)
})