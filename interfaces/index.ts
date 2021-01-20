export enum FileType {
  Logo = "Logo",
  Logomark = "Logomark",
  Icon = "App icon",
  BusinessIcon = "Add icon"
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