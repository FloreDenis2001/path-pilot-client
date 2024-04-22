import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    }

    const prevStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

    const goToStep = (stepIndex: number) => {
        if (stepIndex >= 0 && stepIndex < steps.length) {
            setCurrentStepIndex(stepIndex);
        }
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isLastStep: currentStepIndex === steps.length - 1,
        isFirstStep: currentStepIndex === 0,
        nextStep,
        prevStep,
        goToStep
    };
}
