import { createGlobalTheme } from '@vanilla-extract/css'
import { createGlobalThemeContract } from '@vanilla-extract/css'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const themeContractValues = {
  colors: {
    // Pavel's colors, mostly used for the wallet connection. TODO Some may need to be changed / removed
    error: '',
    textDisconnect: '',
    modalBackdrop: '',
    backgroundSecondary: '',
    modalClose: '',
    text: '',
    modalTextSecondary: '',

    // Bryan's colors from Figma that vary dark vs light
    blackBlue: '',
    darkGray: '',
    medGray: '',
    lightGray: '',
    white: '',
    darkGray10: '',
    blackBlue20: '',
    explicitWhite: '',
    magicGradient: '',
    placeholder: '',
    lightGrayButton: '',
    lightGrayContainer: ',',
    lightGrayOverlay: '',

    // Opacities of black and whit
    white95: '',
    white90: '',
    white80: '',
  },

  shadows: {
    menu: '',
    genieBlue: '',
    elevation: '',
    tooltip: '',
  },
}

export type Theme = typeof themeContractValues

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
export type ThemePartial = DeepPartial<Theme>

export const themeVars = createGlobalThemeContract(themeContractValues, (_, path) => `genie-${path.join('-')}`)

const dimensions = {
  '0': '0',
  '2': '2',
  '4': '4px',
  '8': '8px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '26': '26px',
  '28': '28px',
  '32': '32px',
  '36': '36px',
  '40': '40px',
  '42': '42px',
  '44': '44px',
  '48': '48px',
  '52': '52px',
  '54': '54px',
  '56': '56px',
  '60': '60px',
  '64': '64px',
  '72': '72px',
  '100': '100px',
  '120': '120px',
  '160': '160px',
  '276': '276px',
  '288': '288px',
  '292': '292px',
  half: '50%',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  viewHeight: '100vh',
  viewWidth: '100vw',
  auto: 'auto',
  inherit: 'inherit',
}

const spacing = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '28': '28px',
  '32': '32px',
  '36': '36px',
  '40': '40px',
  '48': '48px',
  '50': '50px',
  '52': '52px',
  '60': '60px',
  '64': '64px',
  '82': '82px',
  '72': '72px',
  '88': '88px',
  '100': '100px',
  '104': '104px',
  '136': '136px',
  '150': '150px',
  '1/2': '50%',
  auto: 'auto',
  unset: 'unset',
}

export const vars = createGlobalTheme(':root', {
  color: {
    ...themeVars.colors,
    genieBlue: '#4C82FB',
    fallbackGradient: 'linear-gradient(270deg, #D1D5DB 0%, #F6F6F6 100%)',
    dropShadow: '0px 4px 16px rgba(70, 115, 250, 0.4)',
    green: '#209853',
    orange: '#FA2C38',
    // Pavel's colors, TODO probably remove them after Pavel continues Genie List
    black: 'black',
    whitesmoke: '#F5F5F5',
    blue: '#4C82FB',
    explicitBlackBlue: '#0E111A',
    gray: '#CBCEDC',
    transculent: '#7F7F7F',
    transparent: 'transparent',
    none: 'none',

    // new uniswap colors:
    blue400: '#4C82FB',
    pink400: '#FB118E',
    red700: '#530f10',
    red400: '#FA2C38',
    green400: '#1A9550',
    grey900: '#0E111A',
    grey700: '#293249',
    grey500: '#5E6887',
    grey400: '#7C85A2',
    grey300: '#99A1BD',
    grey200: '#B7BED4',
    grey100: '#DDE3F7',
    grey50: '#EDEFF7',
  },
  border: {
    transculent: '1.5px solid rgba(0, 0, 0, 0.1)',
    none: 'none',
  },
  radii: {
    menu: '16px',
    modal: '24px',
    '0': '0px',
    '4': '4px',
    '8': '8px',
    '10': '10px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '20': '20px',
    '30': '30px',
    '40': '40px',
    '100': '100px',
    round: '9999px',
  },
  fontSize: {
    '0': '0',
    '10': '10px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '28': '28px',
    '34': '34px',
    '36': '36px',
    '40': '40px',
    '48': '48px',
    '60': '60px',
    '96': '96px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  time: {
    '250': '250ms',
    '500': '500ms',
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Adieu, sans-serif',
  },
})

const flexAlignment = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
  'space-around',
  'space-between',
] as const

const overflow = ['hidden', 'inherit', 'scroll', 'visible', 'auto'] as const

const borderWidth = ['1px', '1.5px', '2px', '4px']

const borderStyle = ['none', 'solid'] as const

export const breakpoints = {
  tabletSm: 656,
  tablet: 708,
  tabletL: 784,
  tabletXl: 830,
  desktop: 948,
  desktopL: 1030,
  desktopXl: 1260,
}

const layoutStyles = defineProperties({
  conditions: {
    mobile: {},
    tabletSm: { '@media': `screen and (min-width: ${breakpoints.tabletSm}px)` },
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    tabletL: { '@media': `screen and (min-width: ${breakpoints.tabletL}px)` },
    tabletXl: { '@media': `screen and (min-width: ${breakpoints.tabletXl}px)` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` },
    desktopL: { '@media': `screen and (min-width: ${breakpoints.desktopL}px)` },
    desktopXl: { '@media': `screen and (min-width: ${breakpoints.desktopXl}px)` },
  },
  defaultCondition: 'mobile',
  properties: {
    alignItems: flexAlignment,
    alignSelf: flexAlignment,
    justifyItems: flexAlignment,
    justifySelf: flexAlignment,
    placeItems: flexAlignment,
    placeContent: flexAlignment,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    width: dimensions,
    height: dimensions,
    maxWidth: dimensions,
    minWidth: dimensions,
    maxHeight: dimensions,
    minHeight: dimensions,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    padding: spacing,
    bottom: spacing,
    left: spacing,
    right: spacing,
    top: spacing,
    margin: spacing,
    zIndex: ['1', '2'],
    gap: spacing,
    flexShrink: spacing,
    flex: ['1', '2', '3'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    display: ['none', 'block', 'flex', 'inline-flex', 'inline-block', 'grid', 'inline'],
    whiteSpace: ['nowrap'],
    textOverflow: ['ellipsis'],
    textAlign: ['left', 'right', 'center', 'justify'],
    visibility: ['visible', 'hidden'],
    flexDirection: ['row', 'column', 'column-reverse'],
    justifyContent: flexAlignment,
    position: ['absolute', 'fixed', 'relative', 'sticky', 'static'],
    objectFit: ['contain', 'cover'],
    order: [0, 1],
  } as const,
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const colorStyles = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    before: { selector: '&:before' },
    placeholder: { selector: '&::placeholder' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color,
    background: vars.color,
    borderColor: vars.color,
    borderBottomColor: vars.color,
    borderTopColor: vars.color,
    backgroundColor: vars.color,
    outlineColor: vars.color,
    fill: vars.color,
  },
})

const unresponsiveProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    before: { selector: '&:before' },
  },
  defaultCondition: 'default',
  properties: {
    cursor: ['default', 'pointer', 'auto'],
    borderStyle,
    borderBottomStyle: borderStyle,
    borderRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    border: vars.border,
    borderBottom: vars.border,
    borderTop: vars.border,
    borderWidth,
    borderBottomWidth: borderWidth,
    fontFamily: vars.fonts,
    overflow,
    overflowX: overflow,
    overflowY: overflow,
    boxShadow: { ...themeVars.shadows, none: 'none', dropShadow: vars.color.dropShadow },
    lineHeight: ['1', 'auto'],
    transition: vars.time,
    transitionDuration: vars.time,
    animationDuration: vars.time,
  },
})

export type UnresponsiveProperties = keyof typeof unresponsiveProperties

export const sprinkles = createSprinkles(layoutStyles, colorStyles, unresponsiveProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]