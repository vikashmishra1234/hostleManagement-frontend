import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ResistrationSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Name is required"),
    email:Yup.string().email().required("email is required"),
    year:Yup.string().min(1).max(1).required("year is required"),
    id:Yup.string().min(4).max(13).required("id is required"),
    phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10).max(10)
})