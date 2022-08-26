/**
 * Theme 主题
 */
export enum Theme {
    /**
     * Light 明亮
     */
    Light = 'light',
    /**
     * Dark 暗黑
     */
    Dark = 'dark'
}
/**
 * Language 语言
 */
export enum Language {
    /**
     * 中文
     */
    CN = 'CN',
    /**
     * 英文
     */
    EN = 'EN'
}

/**
 * 初始化值
 */
export interface GlobalDataInter {
    theme: Theme
    language: Language
    [propName: string]: any
}