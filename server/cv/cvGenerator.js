import fs from "fs";
import moment from "moment/moment";
import pdf from "pdf-creator-node";
import { dataToJson } from "../helper";

export const generateCv = async () => {
  const { profile, skills, aboutMe, resume, hobbies } = dataToJson();
  const dlFile = `${profile.firstName}_${profile.lastName}`.replace(" ", "_");
  try {
    const fileName = `./${dlFile}.pdf`;
    const html = fs.readFileSync(`${__dirname}/cv_temp.html`, "utf8");
    let contents =
      '<div style="font-weight:900;margin-top:4px;text-align:center;">';
    contents += `____${profile.firstName}___CV`;
    contents += "</div>";

    const toDate = (item) => ({
      ...item,
      startDate: moment(item.startDate).format("MMMM YYYY"),
      endDate: item.endDate
        ? moment(item.endDate).format("MMMM YYYY")
        : "Present",
    });

    const options = {
      format: "A4",
      orientation: "portrait",
      footer: {
        height: "20mm",
        contents,
      },
    };
    delete skills.techSkills.detailed;
    const education = resume.find((re) => re.slug === "education");
    const experience = resume.find(
      (re) => re.slug === "professional-experience"
    );
    const document = {
      html,
      data: {
        profile: { ...profile, phone: profile.phoneNumber.replace(" ", "") },
        skills,
        aboutMe,
        educations: education?.contents.map(toDate) || [],
        experiences: experience?.contents.map(toDate) || [],
        hobbies,
      },
      path: fileName,
    };
    return pdf.create(document, options);
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
