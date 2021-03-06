import * as images from './image.js';
import styleMixin from './styleMixin'
export default {
    images,
    styleMixin,
    fonts: {
        regularFont: 'PingFangSC-Regular, sans-serif',
        lightFont: 'PingFangSC-Light, sans-serif',
        semiboldFont: 'PingFangSC-Semibold, sans-serif',
        mediumFont: 'PingFangSC-Medium, sans-serif',

        font12: '12px',
        font14: '14px',
        font16: '16px',
        font18: '18px',
        font20: '20px',
        font22: '22px',
        font24: '24px',
        font26: '26px',
        font28: '28px',
        font36: '36px',
    },
    fontsMobile: {
        regularFont: 'PingFangSC-Regular, sans-serif',
        lightFont: 'PingFangSC-Light, sans-serif',
        semiboldFont: `'PingFangSC-Semibold, sans-serif', 'Microsoft YaHei Bold'`,
        mediumFont: 'PingFangSC-Medium, sans-serif',

        font12: '.12rem',
        font14: '.14rem',
        font16: '.16rem',
        font18: '.18rem',
        font20: '.20rem',
        font22: '.22rem',
        font24: '.24rem',
        font26: '.26rem',
        font28: '.28rem',
        font36: '.36rem',
    },
    colors: {
        layoutBackground: '#f2f5fb',

        headerBackground: '#19284D',
        headerMenuTextUnFocus: '#8794BA',
        headerMenuDarkBackground: '#132045',
        footerMainBackground: '#22325E',
        cardBackground: '#fff',
        linkButtonBackground: '#3D68EB',
        tableHoverBackground: '#F6F9FD',
        antdSelectedItemBackground: '#EBF3FF',
        btnPointBackground: '#13B092',
        EmbellishmentBackground: '#00BD9A',
        greenBtnBackground: '#43BA67',
        yellowBtnBackground: '#EAA41B',
        grayBlueBackground: '#D5E5FD',
        menuSearchBackground: '#0A1533',
        separator: '#d7dce2',

        linkTextColor: '#3D68EB',
        backgroundTextColor: '#fff',
        helpTextColor: '#BDC9EC',
        normalTextColor: '#22325E',
        smallTitleColor: '#8c94a9',
        tableSubTitle: '#515A6E',
        darkTextColor: '#19284D',
        greenTextColor: '#00BD9A',

        cardHoverColor: '#f6f9fd',
        grayTextColor: '#E7EBEF',
        grayerTextColor: '#8E96AA',

        splitLinecolor: '#E7EBEF',

        antProgressInnerBackground: '#CADDFF',
        antProgressBgBackground: '#3D68EB',
        inlineButtonBorder:'#D6D8E5',
    },
}