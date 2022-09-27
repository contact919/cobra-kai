import { find } from 'lodash-es';

type User = {
  name: string,
  permission: 0 | 1
}

export const sum = (arg1: number, arg2: number) => {
  return arg1 + arg2    ;;;
}


export const isAdmin =(name: string) => {
   console.log(1);
  const list: User[] = [
    { name: 'l8', permission: 1 },     
    { name: 'l9', permission: 0 }, 
    { name: 'one', permission: 0 },
  ]
  return find(list, c => c.name === name)?.permission === 1
}