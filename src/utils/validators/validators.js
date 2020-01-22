export const required = value => {
	return value ? undefined : 'Поле обязательно для заполнения'
};