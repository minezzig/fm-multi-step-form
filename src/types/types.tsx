export interface ButtonProps {
    text: string;
    action: () => void;
    className?: string;
  }

  export interface ProgressBarProps {
    active: boolean;
    step: number;
    title: string;
  }

  export interface NavigationProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
  }

  export interface InputFieldProps {
    label: string;
    placeholder: string;
    name: string;
}

export interface PlanType {
    id: number;
    plan: string;
    price: { yearly: number; monthly: number };
    icon: string;
  }
  
 export interface PlanProps {
    plan: PlanType;
  }

export interface AddOnType {
    id: number;
    item: string;
    description: string;
    price: { monthly: number; yearly: number };
  }
  
export interface AddOnProps {
    addOn: AddOnType;
  }