export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name)
}

export const setLocalStorge = (name: string, value: any) => {
  return localStorage.setItem(name, value)
}