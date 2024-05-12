import {
	NotificationContainer,
	Message,
    Comment,
    NotificationIcon,
} from './Notitfication.styled';

const Notification = ({ message, comment, iconHref }) => {
	return (
		<NotificationContainer>
			<NotificationIcon>
				<use href={iconHref}></use>
			</NotificationIcon>
			<Message>{message}</Message>
			<Comment>{comment}</Comment>
		</NotificationContainer>
	);
};

export default Notification;
