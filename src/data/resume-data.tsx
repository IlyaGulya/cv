import { QantorIcon, YandexIcon } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { TwitterIcon } from "lucide-react";
import { ResumeData } from "@/data/types";

export const RESUME_DATA: ResumeData = {
  name: "Ilya Gulya",
  initials: "IG",
  location: "Almaty, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Almaty",
  timezone: "UTC+5",
  about:
    "Experienced Staff Software Engineer focused on building high-quality software in a timely manner. ",
  summary: (<span>
    Staff Software Engineer with over 9 years of experience in Android and cross-platform development.
    Seeking full-time Staff Software Engineer roles.
    I have experience leading development of applications in multiple domain areas including e-commerce,
    VOIP, multimedia, dating, AR and food delivery.
  </span>),
  avatarUrl: "https://avatars.githubusercontent.com/u/668727?v=4",
  personalWebsiteUrl: "https://gulya.me",
  contact: {
    email: "ilya@gulya.me",
    tel: "+7(705) 362-0399",
    social: [
      {
        name: "My blog",
        url: "https://gulya.me",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/IlyaGulya/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/IlyaGulya",
        icon: GitHubIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/IlyaGulya",
        icon: TwitterIcon,
        hideForPrint: true,
      },
    ],
  },
  education: [
    {
      school: "Siberian state university of telecommunications and informatics",
      degree: "Bachelor of Infocommunication technologies",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "QSale.io",
      location: "Almaty, Kazakhstan",
      link: "https://qantor.ru/",
      badges: [],
      title: "Staff Software Engineer",
      logo: QantorIcon,
      start: "February 2023",
      end: "Present",
      summary: "Leading the ongoing development of e-commerce platform",
      bullets: [
        "Fully migrated to Jetpack Compose using custom Design System greatly improving time to market",
        "Implemented ability to easily configure white-label applications without code changes",
        "Integrated Weblate into CI pipeline allowing seamless translation process",
        "Configured CI, reducing build times by 70% and improving development experience",
        "Integrated Huawei Mobile Services and configured AppGallery publication",
        "Supported NFC payments allowing retail employees to accept bank card payments using their phones",
      ],
      techStack: [
        "Kotlin",
        "RxJava",
        "Kotlin Coroutines",
        "Arrow.kt",
        "MVIKotlin",
        "Decompose",
        "Jetpack Compose",
        "Retrofit",
        "Cicerone",
        "Dagger 2 + Anvil",
        "MVI",
        "Clean Architecture",
        "Multi-module project",
        // "Gradle",
        "Gitlab",
      ],
    },
    {
      company: "QSale.io",
      location: "Almaty, Kazakhstan",
      link: "https://qantor.ru/",
      badges: [],
      title: "Staff Software Engineer | Engineering Manager - Mobile",
      logo: QantorIcon,
      start: "November 2021",
      end: "February 2023",
      summary: `Led the ongoing
        development of customer and employee applications for largest jewellery store in Russia. 
        I've managed both the Android and iOS development teams.`,
      bullets: [
        "Integrated modern and reliable architecture for robust and maintainable codebase",
        "Unified architectural approach in iOS and Android teams without sacrificing time to market",
        "Led Android project modularization improving component decoupling and reducing build times by 60%. This also helped in future ",
        "Led implementation of employee referral program, resulting in increased revenue",
        "Let customer payment flow improvement, allowing dynamic payment provider switching without releasing new app version",
      ],
      techStack: [
        "Kotlin",
        "RxJava",
        "Kotlin Coroutines",
        "Arrow.kt",
        "MVIKotlin",
        "Decompose",
        "Jetpack Compose",
        "Retrofit",
        "Cicerone",
        "Dagger 2 + Anvil",
        "MVI",
        "Clean Architecture",
        "Multi-module project",
        // "Gradle",
        "Gitlab",
      ],
    },
    {
      company: "Yandex",
      location: "Moscow, Russia",
      link: "https://yandex.com",
      badges: [],
      title: "Staff Software Engineer",
      logo: YandexIcon,
      start: "March 2019",
      end: "November 2021",
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
        "Led the integration of Huawei Mobile Services and publication to the Huawei AppGallery",
      ],
      techStack: [
        "Kotlin",
        "RxJava",
        "Kotlin Coroutines",
        "Moxy",
        "Cicerone",
        "Dagger 2",
        "MVP",
        "MVI",
        "Clean Architecture",
        "Multi-module project",
        // "Gradle",
        "TeamCity",
        "BitBucket",
      ],
    },
    {
      company: "i20.biz",
      location: "Novosibirsk, Russia",
      link: "https://i20.biz",
      title: "Senior Android Developer | Engineering Manager - Mobile",
      badges: [],
      logo: null,
      start: "June 2017",
      end: "March 2019",
      techStack: [
        "Kotlin",
        "RxJava",
        "SQLite",
        "Moxy",
        "Realm",
        "Dagger 2",
        "Cicerone",
        "React Native",
        "mobx",
        "MVP",
        "MVVM",
      ],
    },
    {
      company: "i20.biz",
      location: "Novosibirsk, Russia",
      link: "https://i20.biz",
      badges: [],
      techStack: [
        "Android",
        "Kotlin",
        "Java",
        "RxJava",
        "SQLite",
        "Moxy",
        "Realm",
        "Dagger 2",
        "Cicerone",
        "MVP",
        "MVVM",
      ],
      title: "Android Developer",
      logo: null,
      start: "May 2015",
      end: "June 2017",
    },
  ],
  skills: {
    "Core": [
      "Kotlin",
      "Java",
      "Kotlin Multiplatform",
      "Kotlin Coroutines",
      "Coroutines Flow",
      "SQLite",
      "RxJava",
    ],
    "CI/CD": [
      "Github Actions",
      "TeamCity",
      "Gitlab CI",
      "Fastlane",
    ],
    "Android": [
      "Android SDK",
      "Jetpack Compose",
      "MVIKotlin",
      "Decompose",
      "Android Arch Components",
      // "OkHttp",
      // "Retrofit",
      // "Gson",
      // "Moshi",
      // "kotlinx.serialization",
      // "Room",
      // "SQLDelight",
      // "Realm",
      // "Jetpack Navigation",
      // "Cicerone",
    ],
    "System Design": [
      "SOLID",
      "Clean Architecture",
      "MVI",
      "UDF",
      "MVP",
      "MVVM",
      // "REST API",
      "Multi-module projects",
    ],
    "DI": [
      "Dagger 2",
      "Anvil",
      "Hilt",
      "Koin",
      "Toothpick",
    ],
    "Cross-platform": [
      "Compose Multiplatform",
      "React Native",
      "Flutter",
      "MobX",
      "Provider",
    ],
  },
  projects: [],
};
