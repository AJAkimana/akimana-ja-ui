import {
	sendEmail,
	serverMsgs,
	serverResponse,
	validateMessageBody
} from './helper';

export const contactMe = async (req, res) => {
	try {
		const errors = validateMessageBody(req.body);

		if (errors.length > 0) {
			return serverResponse(res, 400, errors[0]);
		}
		const { names, email, subject, message } = req.body;

		await sendEmail(subject, { names, email, message });

		return serverResponse(res, 200, 'The message was sent');
	} catch (error) {
		return serverResponse(res, 500, serverMsgs[500]);
	}
};
