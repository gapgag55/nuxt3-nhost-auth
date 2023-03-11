export const setCookie = (name: string, value: string, expires: string) => {
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}