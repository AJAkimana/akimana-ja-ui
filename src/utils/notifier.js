import { toast } from 'react-toastify';

export const notifier = {
	error: (msg) =>
		toast(msg, {
			type: toast.TYPE.ERROR,
			position: toast.POSITION.BOTTOM_RIGHT,
			toastId: 13
		}),
	success: (msg) =>
		toast(msg, {
			type: toast.TYPE.DEFAULT,
			position: toast.POSITION.BOTTOM_LEFT,
			toastId: 17
		})
};
