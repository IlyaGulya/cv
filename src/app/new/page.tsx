import { RESUME_DATA } from "@/data/resume-data";

const data = RESUME_DATA;

export default function Print() {
  return (
    <div className="grid min-h-screen font-serif place-items-center bg-gray-400">
      <main
        className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none"
      >
        <section className="flex flex-row justify-center font-semibold text-2xl uppercase">
          {RESUME_DATA.name}
        </section>
        <section className="flex flex-row justify-center text-sm gap-2">
          <a href={`tel:${RESUME_DATA.contact.tel}`}>
            <span>{RESUME_DATA.contact.tel}</span>
          </a>
          <span>|</span>
          <a href={RESUME_DATA.locationLink}>
            <span>{RESUME_DATA.location}</span>
          </a>
          <span>|</span>
          <span>{RESUME_DATA.timezone}</span>
        </section>
        <section className="flex flex-row justify-center text-sm gap-2">
          <a href={`mailto:${RESUME_DATA.contact.email}`}>
            <span className="text-blue-500">{RESUME_DATA.contact.email}</span>
          </a>
          <span>|</span>
          {RESUME_DATA.contact.social.map((social, index) => (
            <>
              <a key={social.name} href={social.url}>
                <span className="text-blue-500 print:hidden">{social.name}</span>
                {!social.hideForPrint && (
                  <span className="text-blue-500 hidden print:block">{social.url.replace("https://", "")}</span>
                )}
              </a>
              {index !== RESUME_DATA.contact.social.length - 1 && (
                <span>|</span>
              )}
            </>
          ))}
        </section>
        <section>
          <SectionTitle>Objective</SectionTitle>
          <p className="text-sm">{RESUME_DATA.summary}</p>
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
            <div key={category} className="grid grid-cols-12 text-sm">
              <span className="font-semibold col-span-2">{category}</span>
              <span className="col-span-10">{skills.join(", ")}</span>
            </div>
          ))}
        </section>

        <section className="text-sm">
          <SectionTitle>Experience</SectionTitle>
          {RESUME_DATA.work.map((experience) => (
            <div key={`${experience.start + experience.end + experience.title}`}>
              <div className="flex justify-between">
                <span className="font-semibold">{experience.title}</span>
                <span>{experience.start} - {experience.end}</span>
              </div>
              <div className="flex justify-between">
                <a href={experience.link}>{experience.company}</a>
                <span>{experience.location}</span>
              </div>
              <p><b>Tech stack: </b> {experience.techStack?.join(", ")}</p>
              {experience.bullets && experience.bullets.length > 0 && (
                <ul className="pl-4 pt-1 pb-1 list-disc list-inside">
                  {experience.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          {RESUME_DATA.education.map((education) => (
            <div key={education.school} className="text-sm">
              <div className="flex justify-between">
                <p className="font-semibold">{education.degree}</p>
                <span>{education.start} - {education.end}</span>
              </div>
              <p>{education.school}</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

export type SectionTitleProps = {
  children: string
}

const SectionTitle: React.FC<SectionTitleProps> = props => (
  <>
    <h1 className="text-sm mt-4 font-semibold uppercase">{props.children}</h1>
    <span className="border-[0.5px] border-black grow flex mb-1"></span>
  </>
);
