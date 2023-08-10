import fs from "fs";
import pdf from "pdf-creator-node";
import { dataToJson } from "../helper";

export const generateCv = async () => {
  const { profile, skills, aboutMe, resume, hobbies } = dataToJson();
  const dlFile = `${profile.firstName} ${profile.lastName}`.replace(" ", "_");
  try {
    const fileName = `./${dlFile}.pdf`;
    const html = fs.readFileSync(`${__dirname}/cv_temp.html`, "utf8");
    let contents =
      '<div style="font-weight:900;margin-top:00px;text-align:center;">';
    contents += profile.firstName;
    contents += "</div>";

    const options = {
      format: "A2",
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
        profile,
        skills,
        aboutMe,
        educations: education?.contents || [],
        experiences: experience?.contents || [],
        hobbies,
      },
      path: fileName,
    };
    console.log(document);
    return pdf.create(document, options);
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
