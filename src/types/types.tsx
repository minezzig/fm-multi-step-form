export interface OrderType {
  info: InfoType;
  plan: { id: number; planName: string; price: number; frequency: "monthly" | "yearly" };
  addOns: {id: number; addOn: string, price: number}[];
}

export interface InfoType {
  name: string;
  email: string;
  phone: string;
}

export interface OrderContextType {
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
}


export interface ButtonProps {
    text: string;
    action: () => void;
    className?: string;
  }

  export interface ProgressBarProps {
    currentStep: number;
    step: number;
    title: string;
  }

  export interface HeaderProps {
    step: number;
  }

  export interface NavigationProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    verifyInput: () => boolean;
  }

  export interface ErrorType {
    name: string;
    email: string;
    phone: string;
  }

  export interface PersonalInfoProps {
    error: ErrorType;
  }
  
  export interface InputFieldProps {
    label: string;
    placeholder: string;
    name: keyof InfoType;
    error: string;
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

export interface FinishingUpProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}