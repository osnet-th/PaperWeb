import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) =>
    cookies.set(name, value, { ...option });

export const getCookie = (name: string) => cookies.get(name);

export const removeCookie = (name: string, option?: any) =>
    cookies.remove(name, { ...option });