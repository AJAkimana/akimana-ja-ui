import sgMail from '@sendgrid/mail';
import { Response } from 'express';

export const serverMsgs = {
	500: 'Oops, It seems something went wrong please try again'
};
const formatEmail = (user = {}, message) => {
	return `<body style="margin: 0; padding: 0;">
  <table border="0" cellpadding="0" cellspacing="0" width="900px"
    style="padding: 0 40px 0 40px; background-color:#f1b2cc;">
    <tr>
      <td align="center" style="background-color:#d9005a; margin: 0 50px 0 50px;">
        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 32px; line-height: 40px;">My profile
        <p>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0 50px 0 50px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%"
          style="background-color:#ffffff; padding: 0 0 0 20px;">
          <tr>
            <td align="left" style="font-family: Arial, sans-serif; font-size: 20px; color: #050505;">
              <p>Dear Sir, you got a new message from:
              <b>${user.names}.</b></p>
              <p>Email: <b>${user.email}</b></p>
            </td>
          </tr>
          <tr>
            <td align="left"
              style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
              <p>${message}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 30px 30px 30px 30px;">
              &copy; Akimanaja.com, ${new Date().getFullYear()}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;
};
/**
 *
 * @param {String} subject
 * @param {Object} content
 * @returns
 */
export const sendEmail = async (subject, content) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const { names, email, message } = content;
	const emailContent = formatEmail({ names, email }, message);

	const messageBody = {
		to: `${process.env.CONTACT_EMAIL}`,
		from: `${process.env.APP_EMAIL}`,
		subject,
		html: emailContent,
		text: `${emailContent}`
	};
	await sgMail.send(messageBody);
};

/**
 *
 * @param {Response} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {any} data
 * @returns
 */
export const serverResponse = (
	res,
	statusCode = 200,
	message = 'Success',
	data
) => {
	const messageType = statusCode >= 400 ? 'error' : 'message';
	return res.status(statusCode).json({
		status: statusCode,
		[messageType]: message,
		data
	});
};
export const validateMessageBody = (reqBody) => {
	const { names, email, subject } = reqBody;
	const regex = /^[a-zA-Z]+$/;
	const regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
	const validMsg = {
		names: {
			invalid: names === '' || regex.test(names),
			msg: 'The name seems no to be valid'
		},
		email: {
			invalid: email === '',
			msg: 'Please provide a valid email'
		},
		subject: {
			invalid: subject === '',
			msg: 'The subject is a little bit invalid'
		}
	};
	let errors = [];
	for (const obj in validMsg) {
		if (validMsg[obj].invalid) {
			errors.push(validMsg[obj].msg);
		}
	}
	return errors;
};
