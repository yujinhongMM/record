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
 * 初始化值
 */
export interface GlobalDataInter {
    theme: Theme
    [propName: string]: any
}