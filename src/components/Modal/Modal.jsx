import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import sprite from '../../assets/icons/sprite.svg';

import {
	Backdrop,
	ModalContainer,
	CloseButton,
	CloseIcon,
} from './Modal.styled';

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
		const onEscClick = event => {
			if (event.code === 'Escape') {
				closeModal();
			}
		};
		window.addEventListener('keydown', onEscClick);
		return () => {
			window.removeEventListener('keydown', onEscClick);
		};
	}, [closeModal]);

	const onOverlayClick = event => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

  return createPortal(
    <Backdrop onClick={onOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={closeModal}>
          <CloseIcon>
            <use href={`${sprite}#close`} />
          </CloseIcon>
        </CloseButton>
        {children}
      </ModalContainer>
    </Backdrop>,
    document.getElementById('modal-root')
	);
};

export default Modal;
