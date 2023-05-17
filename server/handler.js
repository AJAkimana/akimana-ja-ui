import {
  dataToJson,
  sendEmail,
  serverMsgs,
  serverResponse,
  validateMessageBody,
} from "./helper";

export const contactMe = async (req, res) => {
  try {
    const errors = validateMessageBody(req.body);

    if (errors.length > 0) {
      return serverResponse(res, 400, errors[0]);
    }
    const { names, email, subject, message } = req.body;

    await sendEmail(subject, { names, email, message });
    let msg = `${names}, Thank you for contacting Jean.`;
    msg += " He will get back to you as soon as he can";
    return serverResponse(res, 200, msg, msg);
  } catch (error) {
    return serverResponse(res, 500, serverMsgs[500]);
  }
};

export const getMyInfo = async (req, res) => {
  try {
    let data = dataToJson();
    const thisYear = new Date().getFullYear();
    const skills = data.skills.map((skill) => ({
      ...skill,
      subSkills: skill.subSkills.map((subSkill) => ({
        ...subSkill,
        experience: thisYear - subSkill.experience,
      })),
    }));
    data = { ...data, skills };
    return serverResponse(res, 200, "Success", data);
  } catch (error) {
    return serverResponse(res, 500, serverMsgs[500]);
  }
};
