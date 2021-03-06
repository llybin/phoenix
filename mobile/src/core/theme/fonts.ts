import { isIOS } from '../utils/platform';

export interface Fonts {
  noto: string
  bebas: string
}

const iOSFonts: Fonts = {
  noto: 'Noto Sans',
  bebas: 'Bebas Neue'
};

// TODO: need tests, maybe not working
const androidFonts: Fonts = {
  noto: 'NotoSansRegular',
  bebas: 'BebasNeueRegular'
};

export const fonts: Fonts = isIOS ? iOSFonts : androidFonts;
