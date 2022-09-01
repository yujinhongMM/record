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
 * ArticleType 文章类型
 */
export enum ArticleType {
    /**
     * 英语学习
     */
    EnglishStudy,
    /**
     * 组件轮子
     */
    ComponentWheel,
    /**
     * bug
     */
    Bug
}
/**
 * ArticleInter 文章内容
 */
 export interface ArticleInter {
    id: string | number
    url: string
    title: string
    desc: string
    time: string
    author: string
    [propName: string]: any
}
/**
 * 初始化值
 */
export interface GlobalDataInter {
    theme: Theme
    language: Language
    [propName: string]: any
}