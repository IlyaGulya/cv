import { QantorIcon, YandexIcon } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { TwitterIcon } from "lucide-react";
import { ResumeData } from "@/data/types";

export const RESUME_DATA: ResumeData = {
  name: "Ilya Gulya",
  initials: "IG",
  location: "Almaty, Kazakhstan, UTC+6",
  locationLink: "https://www.google.com/maps/place/Almaty",
  about:
    "Experienced Staff Software Engineer focused on building high-quality software in a timely manner. ",
  summary:
    "I helped multiple teams to significantly improve their developer experience and time to market." +
    "I have experience leading development of applications in multiple domain areas including e-commerce, " +
    "multimedia, dating, AR and food delivery." +
    "I'm proficient in using modern development stack and working in an agile environment" +
    "Currently, I work mostly with Kotlin, Jetpack Compose, Kotlinx Coroutines and MVI. " +
    "I have over 8 years of experience in building mobile applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/668727?v=4",
  personalWebsiteUrl: "https://gulya.me",
  contact: {
    email: "ilya@gulya.me",
    tel: "+77053620399",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/IlyaGulya",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/IlyaGulya/",
        icon: LinkedInIcon
      },
      {
        name: "Twitter",
        url: "https://twitter.com/IlyaGulya",
        icon: TwitterIcon
      }
    ]
  },
  education: [
    {
      school: "Novosibirsk State Technical University",
      degree: "Bachelor's Degree in Infocommunication technologies and communication systems",
      start: "2012",
      end: "2016"
    }
  ],
  work: [
    {
      company: "Qantor",
      link: "https://qantor.ru/",
      badges: ["Remote"],
      title: "Staff Software Engineer",
      logo: QantorIcon,
      start: "2023",
      end: "Present",
      summary: "Leading the ongoing development of e-commerce platform",
      bullets: [
        "Fully migrated to Jetpack Compose using custom Design System greatly improving time to market",
        "Implemented ability to easily configure white-label applications without code changes",
        "Integrated Weblate into CI pipeline allowing seamless translation process",
        "Configured CI, reducing build times by 70% and improving development experience",
        "Integrated Huawei Mobile Services and configured AppGallery publication",
        "Supported NFC payments allowing retail employees to accept bank card payments using their phones"
      ]
    },
    {
      company: "Qantor",
      link: "https://qantor.ru/",
      badges: ["Remote"],
      title: "Engineering Manager - Mobile",
      logo: QantorIcon,
      start: "2021",
      end: "2023",
      summary: `Led the ongoing
        development of customer and employee applications for largest jewellery store in Russia. 
        I've managed both the Android and iOS development teams.`,
      bullets: [
        "Integrated modern and reliable architecture for robust and maintainable codebase",
        "Unified architectural approach in iOS and Android teams without sacrificing time to market",
        "Led Android project modularization improving component decoupling and reducing build times by 60%. This also helped in future ",
        "Led implementation of employee referral program, resulting in increased revenue",
        "Let customer payment flow improvement, allowing dynamic payment provider switching without releasing new app version"
      ]
    },
    {
      company: "Yandex",
      link: "https://yandex.com",
      badges: ["Remote"],
      title: "Staff Software Engineer",
      logo: YandexIcon,
      start: "2019",
      end: "2021",
      summary: `My role involved guiding the technical direction of the Yandex.Eats Android 
       team. This included, but was not limited to: architectural decisions, 
       refactoring planning, configuration and performance management 
       of CI/CD, and development of critical functionality.`,
      bullets: [
        "Pioneered the server-driven UI in the team, letting the development team to focus on more important tasks and increasing flexibility for content managers. This improvement led to a new revenue stream through the sale of ads on the catalog",
        "Revamped the CI pipeline, making its configuration easier to maintain and reducing build times by 50%",
        "Set up remote builds for all team members, reducing the workload on their computers and increasing their productivity",
        "Fully refactored the navigation within the application, making it more flexible and error-prone",
        "Refactored the application into modular components, allowing for tighter integration with other Yandex services through the reuse of code from the application",
        "Successfully completed complex integration of Yandex company-wide SSO solution, allowing users to log in with their Yandex account. This allowed users to use their Yandex.Plus loyalty program benefits in the application",
        "Led the integration of Huawei Mobile Services and publication to the Huawei AppGallery"
      ]
    },
    {
      company: "i20.biz",
      link: "https://i20.biz",
      badges: [],
      title: "Engineering Manager - Mobile",
      logo: null,
      start: "2017",
      end: "2019"
    },
    {
      company: "i20.biz",
      link: "https://i20.biz",
      badges: [],
      title: "Android developer",
      logo: null,
      start: "2015",
      end: "2017"
    }
  ],
  skills: {
    "Core": [
      "Kotlin",
      "Java",
      "Kotlin Coroutines",
      "Coroutines Flow",
      "KMP",
      "RxJava"
    ],
    "CI/CD": [
      "Github Actions",
      "TeamCity",
      "Gitlab CI",
      "Fastlane"
    ],
    "Android": [
      "Android SDK",
      "Jetpack Compose",
      "Compose Multiplatform",
      "MVIKotlin",
      "Decompose",
      "Android Architecture Components",
      "OkHttp",
      "Retrofit",
      "Gson",
      "Moshi",
      "kotlinx.serialization",
      "SQLite",
      "Room",
      "SQLDelight",
      "Realm",
      "Jetpack Navigation",
      "Cicerone"
    ],
    "System Design": [
      "SOLID",
      "Clean Architecture",
      "MVI",
      "UDF",
      "MVP",
      "MVVM",
      "REST API",
      "Multi-module projects"
    ],
    "Dependency Injection": [
      "Dagger 2",
      "Hilt",
      "Anvil",
      "Koin",
      "Toothpick"
    ]
  },
  projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC"
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/"
    //   }
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/"
    //   }
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/"
    //   }
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/"
    //   }
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/"
    //   }
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/"
    //   }
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL"
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/"
    //   }
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL"
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/"
    //   }
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/"
    //   }
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/"
    //   }
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/"
    //   }
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details"
    //   // logo: AmbitLogo
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants"
    //   // logo: BimLogo
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers"
    //   // logo: CDGOLogo
    // }
  ]
};
