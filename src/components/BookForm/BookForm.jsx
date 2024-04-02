import { Formik} from 'formik';
// import * as Yup from 'yup';
import {
    FormTitle,
    FormInfo,
    BookingForm,
    Input,
    Textarea,
} from './BookForm.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';

// const addFormSchema = Yup.object().shape({
//     customerName: Yup.string()
//         .required('Name is rquirede'), 
//     customerEmail:Yup.string().email('Invalid email').required('Email is rquired'),  
//     comment: Yup.string(),
// });

const BookForm = () => {
    const initialValues = {
        customerName: '',
        customerEmail: '',
        bookingDate: '',
        comment: '',    
  };

    return (
       
        <Formik
            initialValues={initialValues}
        >
            <BookingForm autoComplete="off">
                <FormTitle>Book your campervan now</FormTitle>
                <FormInfo>Stay connected! We are always ready to help you.</FormInfo>
                <label htmlFor='customerName'>
                    <Input
                        name="customerName"
                        as="input"
                        type="text"
                        placeholder="Name"
                        autoFocus
                    />                    
                </label>
                <label htmlFor='customerEmail'>
                    <Input
                        name="customerEmail"
                        as="input"
                        type="text"
                        placeholder="Email"                       
                    />                    
                </label>
                <label htmlFor='bookingDate'>
                    <Input
                        name="bookingDate"
                        as="input"
                        type="text"
                        placeholder="Booking date"                       
                    />                    
                </label>
                <label htmlFor='comment'>
                    <Textarea
                        name="comment"
                        as="textarea"
                        type="text"
                        placeholder="Comment"                       
                    />                    
                    </label>
                 <MainButton text="Send" type="submit"/>   
            </BookingForm>            
        </Formik>       
        
    )

}

export default BookForm; 