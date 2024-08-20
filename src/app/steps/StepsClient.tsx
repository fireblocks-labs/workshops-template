"use client";

import { useState, useEffect, useRef } from "react";
import { FiCheckCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Confetti from "react-confetti";
import CodeWithCopy from "../components/CodeBlockWithCopy";
import { useWindowSize } from "react-use";
import { mainPageConfig, stepsPageConfig } from "@/config";

interface Step {
  id: number;
  title: string;
  content: string | void;
}

interface StepsClientProps {
  steps: Step[];
}

export default function StepsClient({ steps }: StepsClientProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const { width, height } = useWindowSize();
  const allStepsCompleted = completedSteps.length === steps.length;

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]); // Reference array for steps

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

    // Scroll to the next step after a short delay to ensure layout is updated
    setTimeout(() => {
      if (stepRefs.current[nextStepId]) {
        stepRefs.current[nextStepId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); // Delay to ensure the browser updates the layout before scrolling
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
        <div className="bg-blue-50 border shadow-md shadow-blue-100 border-blue-200 rounded-lg p-6 mb-8">
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

      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
        {allStepsCompleted && (
          <>
            <Confetti width={width} height={height} />
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-800 -600 mb-8">
                Congratulations!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                You have completed the {mainPageConfig.mainTitle} Workshop!
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-700"
                onClick={handleStartOver}
              >
                Start Over
              </button>
            </div>
          </>
        )}
        {!allStepsCompleted && (
          <>
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Workshop Steps
            </h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border border-blue-300 shadow-md shadow-blue-100 rounded-lg p-4 ${
                    activeStep === step.id
                      ? "bg-white"
                      : completedSteps.includes(step.id)
                      ? "bg-gray-100"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  ref={(el) => {
                    stepRefs.current[step.id] = el;
                  }} // Correctly assign the ref without returning anything
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
                      <h3 className="text-xl font-semibold">{step.title}</h3>
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
                      <div className="mt-10 flex justify-center">
                        <div className="prose prose-lg">
                          <CodeWithCopy htmlContent={step.content as string} />
                        </div>
                      </div>
                      {activeStep === step.id && (
                        <div className="w-full flex justify-center mt-6">
                          <button
                            className="bg-gradient-to-r from-white to-blue-50 text-blue-500 border border-blue-500 px-4 py-2 rounded-2xl hover:from-blue-100 hover:to-blue-100"
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
