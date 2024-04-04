import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    FormTitle,
    FormInfo,
    BookingForm,
    Input,
    Textarea,
    CalendarIcon,
    InputWrapper,
} from './BookForm.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';
import Calendar from 'components/Calendar/Calendar';

import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from 'react-redux';
import { addToBooked } from '../../redux/adverts/slice';
const addFormSchema = Yup.object().shape({
    customerName: Yup.string().required('Name is required'), 
    customerEmail:Yup.string().email('Invalid email').required('Email is required'),  
    bookingDate: Yup.date().required('Date is required'),
    comment: Yup.string(),
});

const BookForm = ({advertId}) => {
    const initialValues = {
        customerName: '',
        customerEmail: '',
        bookingDate: '',
        comment: '',    
    };
    const dispatch = useDispatch(); 

    const handleSubmit = (values, actions) => {
        dispatch(addToBooked({
            advertId: advertId,
            name: values.customerName, 
            email: values.customerEmail, 
            date: values.bookingDate.toISOString(),
            comment: values.comment                        
        }))
        actions.resetForm();
     }
    return (
       
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={addFormSchema}
        >
            {({ errors, touched }) => (
                <BookingForm autoComplete="off">
                    <FormTitle>Book your campervan now</FormTitle>
                    <FormInfo>Stay connected! We are always ready to help you.</FormInfo>
                    <label htmlFor='customerName'>
                        <Input
                            name="customerName"
                            as="input"
                            type="text"
                            placeholder="Name"
                            required={true}
                            autoFocus
                        />
                        {touched.customerName && errors.customerName ? <p>{errors.customerName}</p> : null}
                    </label>
                    <label htmlFor='customerEmail'>
                        <Input
                            name="customerEmail"
                            as="input"
                            type="email"
                            placeholder="Email"
                            required={true}
                        />
                        {touched.customerEmail && errors.customerEmail ? <p>{errors.customerEmail}</p> : null}
                    </label>
                    <label htmlFor='bookingDate'>
                        <InputWrapper>
                            <Calendar />
                            <CalendarIcon>
                                <use href={`${sprite}#calendar`}></use>
                            </CalendarIcon>
                        </InputWrapper>
                        {touched.bookingDate && errors.bookingDate ? <p>{errors.bookingDate}</p> : null}  
                    </label>
                    <label htmlFor='comment'>
                        <Textarea
                            name="comment"
                            as="textarea"
                            type="text"
                            placeholder="Comment"                            
                        />
                        {touched.comment && errors.comment ? <p>{errors.comment}</p> : null}
                    </label>
                    <MainButton text="Send" type="submit"/>
                </BookingForm>)}          
        </Formik>       
        
    )

}

export default BookForm; 