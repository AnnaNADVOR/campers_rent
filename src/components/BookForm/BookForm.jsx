import { Formik } from 'formik';
import * as Yup from 'yup';
import {
	FormTitle,
	FormInfo,
	BookingForm,
	Input,
	Textarea,
	CalendarIcon,
	CalendarWrapper,
	ErrorMassage,
} from './BookForm.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';
import Calendar from 'components/Calendar/Calendar';

import sprite from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { bookedVan } from '../../redux/adverts/operations';

const addFormSchema = Yup.object().shape({
	customerName: Yup.string().required('Name is required'),
	customerEmail: Yup.string()
		.email('Invalid email')
		.required('Email is required'),
	bookingDate: Yup.date().required('Date is required'),
	comment: Yup.string(),
});

const BookForm = ({ advertId }) => {
	const initialValues = {
		customerName: '',
		customerEmail: '',
		bookingDate: '',
		comment: '',
	};
	const dispatch = useDispatch();

	const handleSubmit = async (values, actions) => {
		dispatch(
			bookedVan({
				advertId: advertId,
				name: values.customerName,
				email: values.customerEmail,
				date: values.bookingDate.toISOString(),
				comment: values.comment,
			})
		).then(action => {
			if (action.type === 'adverts/bookedVan/fulfilled') {
				actions.resetForm();
				window.location.reload();
			}
		});
	};

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
					<label htmlFor="customerName">
						<Input
							name="customerName"
							as="input"
							type="text"
							placeholder="Name"
							// autoFocus
						/>
						{touched.customerName && errors.customerName ? (
							<ErrorMassage>{errors.customerName}</ErrorMassage>
						) : null}
					</label>
					<label htmlFor="customerEmail">
						<Input
							name="customerEmail"
							as="input"
							type="email"
							placeholder="Email"
						/>
						{touched.customerEmail && errors.customerEmail ? (
							<ErrorMassage>{errors.customerEmail}</ErrorMassage>
						) : null}
					</label>
					<label htmlFor="bookingDate">
						<CalendarWrapper>
							<Calendar />
							<CalendarIcon>
								<use href={`${sprite}#calendar`}></use>
							</CalendarIcon>
						</CalendarWrapper>
						{touched.bookingDate && errors.bookingDate && (
							<ErrorMassage>{errors.bookingDate}</ErrorMassage>
						)}
					</label>
					<label htmlFor="comment">
						<Textarea
							name="comment"
							as="textarea"
							type="text"
							placeholder="Comment"
						/>
						{touched.comment && errors.comment ? (
							<ErrorMassage>{errors.comment}</ErrorMassage>
						) : null}
					</label>
					<MainButton text="Send" type="submit" />
				</BookingForm>
			)}
		</Formik>
	);
};

export default BookForm;
