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
  headerFontItalic: boolean;
  headerFontBold: boolean;
  subheaderFont: string;
  subheaderFontItalic: boolean;
  subheaderFontBold: boolean;
  bodyFont: string;
  bodyFontItalic: boolean;
  bodyFontBold: boolean;
  businessLogoVarWhiteCustom?: string;
  businessLogoMarkVarWhiteCustom?: string;
  businessAppIconVarWhiteCustom?: string;
  businessLogoVarBlackCustom?: string;
  businessLogoMarkVarBlackCustom?: string;
  businessAppIconVarBlackCustom?: string;
  businessColors: string[];
  businessIcons?: string[];
  h1FontSize: number;
  h2FontSize: number;
  h3FontSize: number;
  h4FontSize: number;
  h5FontSize: number;
  bodyFontSize: number;
  subTextFontSize: number;
  captionFontSize: number;

  handleBusinessName: (name: string) => void;
  handleBusinessVision: (vision: string) => void;
  handleBusinessValues: (values: string[]) => void;
  handleBusinessLogo: (src: string) => void;
  handleBusinessLogoMark: (src: string) => void;
  handleBusinessAppIcon: (src: string) => void;
  handleHeaderFontItalic: (italic: boolean) => void;
  handleSubheaderFontItalic: (italic: boolean) => void;
  handleBodyFontItalic: (italic: boolean) => void;
  handleHeaderFontBold: (bold: boolean) => void;
  handleSubheaderFontBold: (bold: boolean) => void;
  handleBodyFontBold: (bold: boolean) => void;
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
  handleH1FontSize: (size: number) => void;
  handleH2FontSize: (size: number) => void;
  handleH3FontSize: (size: number) => void;
  handleH4FontSize: (size: number) => void;
  handleH5FontSize: (size: number) => void;
  handleBodyFontSize: (size: number) => void;
  handleSubTextFontSize: (size: number) => void;
  handleCaptionFontSize: (size: number) => void;
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
  headerFontItalic: false,
  headerFontBold: false,
  subheaderFont: "",
  subheaderFontItalic: false,
  subheaderFontBold: false,
  bodyFont: "",
  bodyFontItalic: false,
  bodyFontBold: false,
  businessLogoVarWhiteCustom: "",
  businessLogoMarkVarWhiteCustom: "",
  businessAppIconVarWhiteCustom: "",
  businessLogoVarBlackCustom: "",
  businessLogoMarkVarBlackCustom: "",
  businessAppIconVarBlackCustom: "",
  businessColors: [],
  businessIcons: [],
  h1FontSize: 48.83,
  h2FontSize: 39.06,
  h3FontSize: 31.25,
  h4FontSize: 25.0,
  h5FontSize: 20.0,
  bodyFontSize: 16.0,
  subTextFontSize: 12.8,
  captionFontSize: 10.24,

  handleBusinessName: () => null,
  handleBusinessVision: () => null,
  handleBusinessValues: () => null,
  handleBusinessLogo: () => null,
  handleBusinessLogoMark: () => null,
  handleBusinessAppIcon: () => null,
  handleHeaderFontItalic: () => null,
  handleSubheaderFontItalic: () => null,
  handleBodyFontItalic: () => null,
  handleHeaderFontBold: () => null,
  handleSubheaderFontBold: () => null,
  handleBodyFontBold: () => null,
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
  handleH1FontSize: () => null,
  handleH2FontSize: () => null,
  handleH3FontSize: () => null,
  handleH4FontSize: () => null,
  handleH5FontSize: () => null,
  handleBodyFontSize: () => null,
  handleSubTextFontSize: () => null,
  handleCaptionFontSize: () => null,
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
  const [headerFontItalic, setHeaderFontItalic] = useState<boolean>(false);
  const [subheaderFontItalic, setSubheaderFontItalic] = useState<boolean>(
    false
  );
  const [bodyFontItalic, setBodyFontItalic] = useState<boolean>(false);
  const [headerFontBold, setHeaderFontBold] = useState<boolean>(false);
  const [subheaderFontBold, setSubheaderFontBold] = useState<boolean>(false);
  const [bodyFontBold, setBodyFontBold] = useState<boolean>(false);
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
  const [h1FontSize, setH1FontSize] = useState<number>(0);
  const [h2FontSize, setH2FontSize] = useState<number>(0);
  const [h3FontSize, setH3FontSize] = useState<number>(0);
  const [h4FontSize, setH4FontSize] = useState<number>(0);
  const [h5FontSize, setH5FontSize] = useState<number>(0);
  const [bodyFontSize, setBodyFontSize] = useState<number>(0);
  const [subTextFontSize, setSubTextFontSize] = useState<number>(0);
  const [captionFontSize, setCaptionFontSize] = useState<number>(0);

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
  const handleHeaderFontItalic = (italic: boolean) => {
    setHeaderFontItalic(italic);
  };
  const handleSubheaderFontItalic = (italic: boolean) => {
    setSubheaderFontItalic(italic);
  };
  const handleBodyFontItalic = (italic: boolean) => {
    setBodyFontItalic(italic);
  };
  const handleHeaderFontBold = (bold: boolean) => {
    setHeaderFontBold(bold);
  };
  const handleSubheaderFontBold = (bold: boolean) => {
    setSubheaderFontBold(bold);
  };
  const handleBodyFontBold = (bold: boolean) => {
    setBodyFontBold(bold);
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

  const handleH1FontSize = (size: number) => {
    setH1FontSize(size);
  };
  const handleH2FontSize = (size: number) => {
    setH2FontSize(size);
  };
  const handleH3FontSize = (size: number) => {
    setH3FontSize(size);
  };
  const handleH4FontSize = (size: number) => {
    setH4FontSize(size);
  };
  const handleH5FontSize = (size: number) => {
    setH5FontSize(size);
  };
  const handleBodyFontSize = (size: number) => {
    setBodyFontSize(size);
  };
  const handleSubTextFontSize = (size: number) => {
    setSubTextFontSize(size);
  };
  const handleCaptionFontSize = (size: number) => {
    setCaptionFontSize(size);
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
    headerFontItalic,
    subheaderFontItalic,
    bodyFontItalic,
    headerFontBold,
    subheaderFontBold,
    bodyFontBold,
    businessLogoVarWhiteCustom,
    businessLogoMarkVarWhiteCustom,
    businessAppIconVarWhiteCustom,
    businessLogoVarBlackCustom,
    businessLogoMarkVarBlackCustom,
    businessAppIconVarBlackCustom,
    businessColors,
    businessIcons,
    h1FontSize,
    h2FontSize,
    h3FontSize,
    h4FontSize,
    h5FontSize,
    bodyFontSize,
    subTextFontSize,
    captionFontSize,
    handleBusinessName,
    handleBusinessVision,
    handleBusinessValues,
    handleBusinessLogo,
    handleBusinessLogoMark,
    handleBusinessAppIcon,
    handleHeaderFont,
    handleSubheaderFont,
    handleBodyFont,
    handleHeaderFontItalic,
    handleSubheaderFontItalic,
    handleBodyFontItalic,
    handleHeaderFontBold,
    handleSubheaderFontBold,
    handleBodyFontBold,
    handleBusinessLogoVarWhiteCustom,
    handleBusinessLogoMarkVarWhiteCustom,
    handleBusinessAppIconVarWhiteCustom,
    handleBusinessLogoVarBlackCustom,
    handleBusinessLogoMarkVarBlackCustom,
    handleBusinessAppIconVarBlackCustom,
    handleBusinessColors,
    handleBusinessIcons,
    handleH1FontSize,
    handleH2FontSize,
    handleH3FontSize,
    handleH4FontSize,
    handleH5FontSize,
    handleBodyFontSize,
    handleSubTextFontSize,
    handleCaptionFontSize,
  };
}
