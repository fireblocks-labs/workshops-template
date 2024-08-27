export type MainPageConfig = {
  mainTitle: string;
  subTitle: string;
  heroText: string;
  heroButtonText: string;
  heroButtonLink: string;
  workshopSummarySteps: { title: string; text: string }[];
};


export type NavBarConfig = {
  navbarButtonText: string;
  navbarButtonLink: string;
  logoLink: string;
  discordLink?: string;
}

export type StepsPageConfig = {
  stepsData: {
    id: number;
    title: string;
    file: string;
  }[];
  prerequisites: {
    text: string;
  }[];
};


export type GeneralConfig = {
  basePath: string
}