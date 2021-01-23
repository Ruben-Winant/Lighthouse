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