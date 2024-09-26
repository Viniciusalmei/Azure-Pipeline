import {createI18n} from "vue-i18n";
import PtBrTranslations from './pt_br.json'
import EnTranslations from './en.json'

export type AvailableLanguages  =   "en" | "br";

export const changeLanguage=(locale:AvailableLanguages)=> {
i18nApplication.global.locale.value = locale; //serve para esta biblioteca ficar runtime all time, enquanto estiver rodando servidor

};

export const i18nApplication = createI18n( {
    legacy: false, 
    locale: 'en',
    messages: {
        en: EnTranslations,
        br: PtBrTranslations

    }
}
);