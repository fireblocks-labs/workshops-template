export type MainPageConfig = {
  /**
   * The main title of the main page
   */
  mainTitle: string;

  /**
   * The sub-title of the main page
   */
  subTitle: string;

  /**
   * Text under the sub-title of the main page
   */
  heroText: string;

  /**
   * Text of the button in the main page
   */
  heroButtonText: string;

  /**
   * Link of the button in the main page
   */
  heroButtonLink: string;

  /**
   * General outline of the steps in the main page
   */
  workshopSummarySteps: { title: string; text: string }[];
};


export type NavBarConfig = {
  /**
   * The most right button navbar text
   */
  navbarButtonText: string;

  /**
   * The most right button navbar link
   */
  navbarButtonLink: string;
  
  /**
   * The redirect link when clicking on the logo
   */
  logoLink: string;

  /**
   * Discord server link 
   */
  discordLink?: string;
}

export type StepsPageConfig = {
  /**
   * The workshop steps. Each step has an id (step number), the title and the Markdown file name that outlines the step instructions (should be located in the src/guides dir)
   */
  stepsData: {
    id: number;
    title: string;
    file: string;
  }[];

  /**
   * The pre-requisites block in the /steps page
   */
  prerequisites: {
    text: string;
  }[];
};


export type GeneralConfig = {
  /**
   * Your company name to appear in the footer
   */
  companyName: string;

  /**
   * IMPORTANT - the github repository name. This is going to be the base path for your entire app
   */
  basePath: string;
}