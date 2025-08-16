import type React from "react"
import { Fragment } from "react"
import { RESUME_DATA } from "@/data/resume-data"

const data = RESUME_DATA

export default function Print() {
  return (
    <div className="grid min-h-screen font-sans place-items-center bg-gray-400">
      <main className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none px-[0.5in] py-[0.5in] text-[10pt] leading-[1.2]">
        <section className="text-center mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[22pt] font-bold text-black tracking-wide mb-2">{data.name}</h1>
            <div>
              <div className="text-[10pt] text-black mb-1">
                <a href={`tel:${data.contact.tel}`} className="hover:underline">
                  {data.contact.tel}
                </a>
                <span className="mx-2">|</span>
                <a href={data.locationLink} className="hover:underline">
                  {data.location}
                </a>
                <span className="mx-2">|</span>
                <span>UTC+5</span>
              </div>

              <div className="text-[10pt]">
                <a href={`mailto:${data.contact.email}`} className="text-blue-600 hover:underline">
                  {data.contact.email}
                </a>
                {data.contact.social.map((s) => (
                  <Fragment key={s.name}>
                    <span className="mx-2 text-black">|</span>
                    <a href={s.url} className="text-blue-600 hover:underline">
                      {s.url.replace("https://", "")}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mb-4">
          <p className="text-black leading-[1.3]">{data.summary}</p>
        </div>

        <SectionTitle>SKILLS</SectionTitle>
        <div className="mb-4 space-y-1">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="flex">
              <strong className="w-[120px] text-black font-bold shrink-0">{category}</strong>
              <span className="text-black">{skills.join(", ")}</span>
            </div>
          ))}
        </div>

        <SectionTitle>EXPERIENCE</SectionTitle>
        <div className="space-y-6 mb-4">
          {data.work.map((xp) => {
            return (
              <div key={`${xp.start}${xp.end}${xp.title}`}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="font-bold text-black">{xp.title}</span>
                    <span className="text-black"> @ </span>
                    <a href={xp.link} className="text-black hover:underline font-bold">
                      {xp.company}
                    </a>
                  </div>
                  <div className="text-right text-black">
                    <div>
                      {xp.start} - {xp.end}
                    </div>
                  </div>
                </div>

                {xp.summary && (
                  <div className="mb-1">
                    <span className="font-bold text-black">Summary:</span>
                    <span className="ml-1 text-black">{xp.summary}</span>
                  </div>
                )}

                {xp.techStack.length > 0&& (
                  <div className="mb-1">
                    <span className="font-bold text-black">Tech stack:</span>
                    <span className="ml-1 text-black">{xp.techStack.join(", ")}</span>
                  </div>
                )}

                {(xp.bullets.length > 0) && (
                  <ul className="ml-4 list-disc space-y-1 text-black">
                    {xp.bullets.map((b, i) => (
                      <li key={i} className="leading-[1.3]">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        <SectionTitle>EDUCATION</SectionTitle>
        <div>
          {data.education.map((ed) => (
            <div key={ed.school} className="flex justify-between">
              <div>
                <span className="font-bold text-black">{ed.degree}</span>
                <br />
                <span className="text-black">{ed.school}</span>
              </div>
              <span className="text-black">
                {ed.start} - {ed.end}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

type SectionTitleProps = { children: string }

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="mb-2 text-[11pt] font-bold text-black uppercase border-b border-black pb-1">{children}</h2>
)
