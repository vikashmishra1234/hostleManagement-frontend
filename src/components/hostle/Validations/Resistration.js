import * as Yup from 'yup'



export const ResistrationSchema = Yup.object({
    name:Yup.string().min(3).max(25).required("Name is required"),
    email:Yup.string().email().required("email is required"),
    year:Yup.string().min(1).max(1).required("year is required"),
    phone:Yup.string().min(10).max(10)
})
export const Student = Yup.object().shape({
    Name:Yup.string().min(3).max(25).required("Name is required"),
    Year:Yup.string().min(1).max(1).required("year is required"),
    Phone:Yup.string().min(10).max(10).required()
})