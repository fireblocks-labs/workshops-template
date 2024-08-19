import Layout from "./components/Layout";
import Link from "next/link";
import { mainPageConfig } from "@/config";

export default function Home() {
  
  return (
    <Layout>
      <div className="bg-gradient-to-r from-white via-blue-50 to-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {mainPageConfig.mainTitle}
            <br />
            <br />
            <p className="text-4xl">{mainPageConfig.subTitle}</p>
          </h2>
          <p className="text-lg text-secondary mb-8">
            {mainPageConfig.heroText}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={mainPageConfig.heroButtonLink} legacyBehavior>
              <a
                className="text-primary px-6 py-3 border border-primary rounded-2xl text-sm hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mainPageConfig.heroButtonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
        <h3 className="text-2xl font-bold text-primary mb-8">
          What You Will Do:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainPageConfig.workshopSummarySteps.map((step, index) => {
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 shadow-blue-200">
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-secondary">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-10">
        <Link
          href="/steps"
          className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-2xl text-sm hover:from-blue-700 hover:to-blue-700"
        >
          Get Started
        </Link>
      </div>
    </Layout>
  );
}
