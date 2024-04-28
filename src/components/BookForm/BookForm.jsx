import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import sprite from '../../assets/icons/sprite.svg';
import MainButton from 'components/Buttons/MainButton/MainButton';
import Calendar from 'components/Calendar/Calendar';

import { useDispatch } from 'react-redux';
import { bookedVan } from '../../redux/adverts/operations';

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
				Notify.success('Form submitted successfully!', {
					fontFamily: 'inherit',
					borderRadius: '10px',
					success: {
						background: '#F2F4F7',
						textColor: '#101828',
						notiflixIconColor: '#00A36C',
					},
				});
				window.location.reload();
			}

			if (action.type === 'adverts/bookedVan/rejected') {
				Report.failure('Try again!', `${action.payload}`, 'OK', {
					fontFamily: 'inherit',
					borderRadius: '10px',
					svgSize: '90px',
					backgroundColor: '#F7F7F7',
					failure: {
						svgColor: '#E44848',
						buttonBackground: '#E44848',
						titleColor: '#101828',
						messageColor: '#475467',
						buttonColor: '#F7F7F7',
						backOverlayColor: 'rgba(17, 18, 19, 0.4)',
					},
				});			
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
