export enum FileType {
  Logo,
  Logomark,
  Icon,
  BusinessIcon,
  LogoWhite,
  LogoBlack,
  LogomarkWhite,
  LogomarkDark,
  IconWhite,
  IconBlack
}

export enum FontType {
  Header,
  SubHeader,
  Body
}

export type GoogleFontStyles = {
  items: FontStyle[]
}

export type FontStyle = {
  family: string,
  category: string
}

export enum Scales {
  'Minor Second' = 1.067,
  'Major Second' = 1.125,
  'Minor Third' = 1.200,
  'Major Third' = 1.250,
  'Perfect Fourth' = 1.333,
  'Augmented Fourth' = 1.414,
  'Perfect Fifth' = 1.500,
  'Golden Ratio' = 1.618
}