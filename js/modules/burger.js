// ! константы классов
export const burgerAction = () => {
	const BODY_HIDE_CLASS_NAME = 'body_hide',
		OPEN_BURGER_BTN_CLASS_NAME = 'burger__btn_open',
		OPEN_BURGER_CLASS_NAME = 'burger_open';

	const bodyNode = document.querySelector('body'),
		burgerBtnNode = document.querySelector('.header__burger-btn'),
		burgerNode = document.querySelector('.burger'),
		burgerContentNode = document.querySelector('.burger__content'),
		burgerNavLinks = document.querySelectorAll('.burger__nav-link');

	const burgerToggle = () => {
		bodyNode.classList.toggle(BODY_HIDE_CLASS_NAME);
		burgerBtnNode.classList.toggle(OPEN_BURGER_BTN_CLASS_NAME);
		burgerNode.classList.toggle(OPEN_BURGER_CLASS_NAME);
	};

	burgerBtnNode.addEventListener('click', burgerToggle);
	burgerNode.addEventListener('click', event => {
		const isClickOutsideContent = !event
			.composedPath()
			.includes(burgerContentNode);

		if (isClickOutsideContent) burgerToggle();
	});
	for (const link of burgerNavLinks) {
		link.addEventListener('click', burgerToggle);
	}
};
