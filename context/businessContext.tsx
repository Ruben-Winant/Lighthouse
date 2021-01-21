import { createContext, useState } from "react";

//accessible data
export interface BusinessContextData {
  businessName: string;
  businessVision: string;
  businessValues: string[];
  businessLogo: string;
  businessLogoMark?: string;
  businessAppIcon?: string;
  headerFont: string;
  subheaderFont: string;
  bodyFont: string;
  businessLogoVarWhiteCustom?: string;
  businessLogoMarkVarWhiteCustom?: string;
  businessAppIconVarWhiteCustom?: string;
  businessLogoVarBlackCustom?: string;
  businessLogoMarkVarBlackCustom?: string;
  businessAppIconVarBlackCustom?: string;
  businessColors: string[];
  businessIcons?: string[];

  handleBusinessName: (name: string) => void;
  handleBusinessVision: (vision: string) => void;
  handleBusinessValues: (values: string[]) => void;
  handleBusinessLogo: (src: string) => void;
  handleBusinessLogoMark: (src: string) => void;
  handleBusinessAppIcon: (src: string) => void;
  handleHeaderFont: (font: string) => void;
  handleSubheaderFont: (font: string) => void;
  handleBodyFont: (font: string) => void;
  handleBusinessLogoVarWhiteCustom: (src: string) => void;
  handleBusinessLogoMarkVarWhiteCustom: (src: string) => void;
  handleBusinessAppIconVarWhiteCustom: (src: string) => void;
  handleBusinessLogoVarBlackCustom: (src: string) => void;
  handleBusinessLogoMarkVarBlackCustom: (src: string) => void;
  handleBusinessAppIconVarBlackCustom: (src: string) => void;
  handleBusinessColors: (src: string[]) => void;
  handleBusinessIcons: (src: string[]) => void;
}

//default values
export const businessContextDefaultValue: BusinessContextData = {
  businessName: "",
  businessVision: "",
  businessValues: [],
  businessLogo: "",
  businessLogoMark: "",
  businessAppIcon: "",
  headerFont: "",
  subheaderFont: "",
  bodyFont: "",
  businessLogoVarWhiteCustom: "",
  businessLogoMarkVarWhiteCustom: "",
  businessAppIconVarWhiteCustom: "",
  businessLogoVarBlackCustom: "",
  businessLogoMarkVarBlackCustom: "",
  businessAppIconVarBlackCustom: "",
  businessColors: [],
  businessIcons: [],

  handleBusinessName: () => null,
  handleBusinessVision: () => null,
  handleBusinessValues: () => null,
  handleBusinessLogo: () => null,
  handleBusinessLogoMark: () => null,
  handleBusinessAppIcon: () => null,
  handleHeaderFont: () => null,
  handleSubheaderFont: () => null,
  handleBodyFont: () => null,
  handleBusinessLogoVarWhiteCustom: () => null,
  handleBusinessLogoMarkVarWhiteCustom: () => null,
  handleBusinessAppIconVarWhiteCustom: () => null,
  handleBusinessLogoVarBlackCustom: () => null,
  handleBusinessLogoMarkVarBlackCustom: () => null,
  handleBusinessAppIconVarBlackCustom: () => null,
  handleBusinessColors: () => null,
  handleBusinessIcons: () => null,
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
  const [businessLogo, setBusinessLogo] = useState<string>("");
  const [businessLogoMark, setBusinessLogoMark] = useState<string>("");
  const [businessAppIcon, setBusinessAppIcon] = useState<string>("");
  const [headerFont, setHeaderFont] = useState<string>("");
  const [subheaderFont, setSubheaderFont] = useState<string>("");
  const [bodyFont, setBodyFont] = useState<string>("");
  const [
    businessLogoVarWhiteCustom,
    setBusinessLogoVarWhiteCustom,
  ] = useState<string>("");
  const [
    businessLogoMarkVarWhiteCustom,
    setBusinessLogoMarkVarWhiteCustom,
  ] = useState<string>("");
  const [
    businessAppIconVarWhiteCustom,
    setBusinessAppIconVarWhiteCustom,
  ] = useState<string>("");
  const [
    businessLogoVarBlackCustom,
    setBusinessLogoVarBlackCustom,
  ] = useState<string>("");
  const [
    businessLogoMarkVarBlackCustom,
    setBusinessLogoMarkVarBlackCustom,
  ] = useState<string>("");
  const [
    businessAppIconVarBlackCustom,
    setBusinessAppIconVarBlackCustom,
  ] = useState<string>("");
  const [businessColors, setBusinessColors] = useState<string[]>([]);
  const [businessIcons, setBusinessIconss] = useState<string[]>([]);

  //set functions
  const handleBusinessName = (name: string) => {
    setBName(name);
  };
  const handleBusinessVision = (vision: string) => {
    setBVision(vision);
  };
  const handleBusinessValues = (values: string[]) => {
    setBValues(values);
  };
  const handleBusinessLogo = (value: string) => {
    setBusinessLogo(value);
  };
  const handleBusinessLogoMark = (value: string) => {
    setBusinessLogoMark(value);
  };
  const handleBusinessAppIcon = (value: string) => {
    setBusinessAppIcon(value);
  };
  const handleHeaderFont = (value: string) => {
    setHeaderFont(value);
  };
  const handleSubheaderFont = (value: string) => {
    setSubheaderFont(value);
  };
  const handleBodyFont = (value: string) => {
    setBodyFont(value);
  };
  const handleBusinessLogoVarWhiteCustom = (src: string) => {
    setBusinessLogoVarWhiteCustom(src);
  };
  const handleBusinessLogoMarkVarWhiteCustom = (src: string) => {
    setBusinessLogoMarkVarWhiteCustom(src);
  };
  const handleBusinessAppIconVarWhiteCustom = (src: string) => {
    setBusinessAppIconVarWhiteCustom(src);
  };
  const handleBusinessLogoVarBlackCustom = (src: string) => {
    setBusinessLogoVarBlackCustom(src);
  };
  const handleBusinessLogoMarkVarBlackCustom = (src: string) => {
    setBusinessLogoMarkVarBlackCustom(src);
  };
  const handleBusinessAppIconVarBlackCustom = (src: string) => {
    setBusinessAppIconVarBlackCustom(src);
  };
  const handleBusinessColors = (src: string[]) => {
    setBusinessColors(src);
  };
  const handleBusinessIcons = (src: string[]) => {
    setBusinessIconss(src);
  };

  return {
    businessName,
    businessVision,
    businessValues,
    businessLogo,
    businessLogoMark,
    businessAppIcon,
    headerFont,
    subheaderFont,
    bodyFont,
    businessLogoVarWhiteCustom,
    businessLogoMarkVarWhiteCustom,
    businessAppIconVarWhiteCustom,
    businessLogoVarBlackCustom,
    businessLogoMarkVarBlackCustom,
    businessAppIconVarBlackCustom,
    businessColors,
    businessIcons,
    handleBusinessName,
    handleBusinessVision,
    handleBusinessValues,
    handleBusinessLogo,
    handleBusinessLogoMark,
    handleBusinessAppIcon,
    handleHeaderFont,
    handleSubheaderFont,
    handleBodyFont,
    handleBusinessLogoVarWhiteCustom,
    handleBusinessLogoMarkVarWhiteCustom,
    handleBusinessAppIconVarWhiteCustom,
    handleBusinessLogoVarBlackCustom,
    handleBusinessLogoMarkVarBlackCustom,
    handleBusinessAppIconVarBlackCustom,
    handleBusinessColors,
    handleBusinessIcons,
  };
}
