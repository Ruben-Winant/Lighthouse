import { createContext, useState } from "react";

//accessible data
export interface BusinessContextData {
  businessName: string;
  businessVision: string;
  businessValues: string[];
  handleBusinessName: (name: string) => void;
  handleBusinessVision: (vision: string) => void;
  handleBusinessValues: (values: string[]) => void;
}

//default values
export const businessContextDefaultValue: BusinessContextData = {
  businessName: "",
  businessVision: "",
  businessValues: [],
  handleBusinessName: () => null,
  handleBusinessVision: () => null,
  handleBusinessValues: () => null,
};

//provider
export const BusinessContext = createContext<BusinessContextData>(
  businessContextDefaultValue
);

//hooks that components can use to change the values
export function useBusinessContextValue(): BusinessContextData {
  const [businessName, setBName] = useState<string>("");
  const [businessVision, setBVision] = useState<string>("");
  const [businessValues, setBValues] = useState<string[]>([]);

  const handleBusinessName = (name: string) => {
    setBName(name);
  };

  const handleBusinessVision = (vision: string) => {
    setBVision(vision);
  };

  const handleBusinessValues = (values: string[]) => {
    setBValues(values);
  };

  return {
    businessName,
    businessVision,
    businessValues,
    handleBusinessName,
    handleBusinessVision,
    handleBusinessValues,
  };
}
