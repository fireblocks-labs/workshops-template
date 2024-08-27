"use client";

import { useState, useEffect, useRef } from "react";
import { FiCheckCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Confetti from "react-confetti";
import CodeWithCopy from "./CodeBlockWithCopy";
import { useWindowSize } from "react-use";
import { mainPageConfig, stepsPageConfig } from "@/config";

type Step = {
  id: number;
  title: string;
  content: string | void;
}

type StepsClientProps = {
  steps: Step[];
}

export default function StepsClient({ steps }: StepsClientProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const { width, height } = useWindowSize();
  const allStepsCompleted = completedSteps.length === steps.length;

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const savedCompletedSteps = JSON.parse(
      localStorage.getItem("completedSteps") || "[]"
    );
    if (savedCompletedSteps.length > 0) {
      setCompletedSteps(savedCompletedSteps);
      setActiveStep(savedCompletedSteps[savedCompletedSteps.length - 1] + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  }, [completedSteps]);

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const handleNextStep = (currentStepId: number) => {
    setCompletedSteps((prev) => [...prev, currentStepId]);
    const nextStepId = currentStepId + 1;
    setExpandedStep(nextStepId);
    setActiveStep(nextStepId);

    setTimeout(() => {
      if (stepRefs.current[nextStepId]) {
        stepRefs.current[nextStepId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleStartOver = () => {
    localStorage.removeItem("completedSteps");
    setCompletedSteps([]);
    setActiveStep(1);
    setExpandedStep(null);
  };

  return (
    <>
      {!completedSteps.includes(steps.length) && (
        <div className="bg-primary-50 border shadow-md shadow-primary-100 border-primary-200 rounded-lg p-6 mb-8 mt-7">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Prerequisites:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-3">
            {stepsPageConfig.prerequisites.map((prerequisite, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: prerequisite.text }}
              />
            ))}
          </ul>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {allStepsCompleted && (
          <>
            <Confetti width={width} height={height} />
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-8">
                Congratulations!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                You have completed the {mainPageConfig.mainTitle} Workshop!
              </p>
              <button
                className="bg-gradient-to-r from-primary-300 to-primary-600 text-white px-6 py-3 rounded-2xl hover:from-primary hover:to-primary"
                onClick={handleStartOver}
              >
                Start Over
              </button>
            </div>
          </>
        )}
        {!allStepsCompleted && (
          <>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
              Workshop Steps
            </h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border border-primary-200 shadow-md shadow-primary-100 rounded-lg p-4 sm:p-6 overflow-hidden ${
                    activeStep === step.id
                      ? "bg-white"
                      : completedSteps.includes(step.id)
                      ? "bg-gray-100"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  ref={(el) => {
                    stepRefs.current[step.id] = el;
                  }}
                >
                  <div
                    className={`flex justify-between items-center ${
                      activeStep === step.id || completedSteps.includes(step.id)
                        ? "cursor-pointer"
                        : ""
                    }`}
                    onClick={() =>
                      (activeStep === step.id ||
                        completedSteps.includes(step.id)) &&
                      toggleStep(step.id)
                    }
                  >
                    <div className="flex items-center">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      {completedSteps.includes(step.id) && (
                        <FiCheckCircle className="text-green-500 text-2xl" />
                      )}
                      {(activeStep === step.id || expandedStep === step.id) &&
                        (expandedStep === step.id ? (
                          <FiChevronUp className="text-2xl" />
                        ) : (
                          <FiChevronDown className="text-2xl" />
                        ))}
                    </div>
                  </div>
                  {expandedStep === step.id && (
                    <>
                      <div className="mt-4 sm:mt-6 flex justify-center">
                        <div className="prose prose-sm sm:prose-lg max-w-full">
                          <CodeWithCopy htmlContent={step.content as string} />
                        </div>
                      </div>
                      {activeStep === step.id && (
                        <div className="w-full flex justify-center mt-4 sm:mt-6">
                          <button
                            className="bg-gradient-to-r from-white to-primary-50 text-primary-500 border border-primary-200 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl hover:from-primary hover:to-primary hover:text-white"
                            onClick={() => handleNextStep(step.id)}
                          >
                            Complete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
