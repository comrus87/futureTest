export const required = value => {
	return value ? undefined : 'Поле обязательное для заполнения';
};

export const idValidate = value => {
	return !isNaN(value) ? undefined : 'Должны быть только цифры';
};

export const mailValidate = value => {
	const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
	return reg.test(value) ? undefined : 'Введен некорректный e-mail';
};

export const phoneValidate = value => {
	const reg =/^\(\d{3}\)\d{3}(-\d{4})$/;
	return reg.test(value) ? undefined : 'Введите телефон в формате (999)999-9999';
};