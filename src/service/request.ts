/**
 * 配置项
 */
interface OptionInter {
    header?: object
    method?: string
    [propName: string]: any
}
/**
 * 请求返回类型
 */
interface ResponseInter {
    code: number
    data: any
    desc: string
} 
/**
 * 函数类型
 */
interface RequestFunInter {
    (url: string, options: OptionInter): Promise<any>
}


const defaultOption: OptionInter = {
    headers: {
        'content-type': 'application/json'
    },
    method: 'GET', 
    mode: 'cors'
}

const BASE_URL = 'https://www.fastmock.site/mock/d75f9145f96813a6716231c1765c9e2b/record';

const request: RequestFunInter = async (url, options = defaultOption) => {
    try {
        const res = await fetch(`${BASE_URL}${url}`, options);
        const { status } = res;
        if (status !== 200) {
            throw '接口错误';
        }
        const result: ResponseInter = await res.json();
        if (result.code !== 0) {
            throw result.desc;
        } 
        return result.data;
    } catch (error) {
        alert(error);
        return null;
    }
}

export default request;