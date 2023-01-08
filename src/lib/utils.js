import {  format } from 'date-fns'
export const formatDate=(val)=>{
    const stPattysDay = new Date('2020/03/17');
  return  format(stPattysDay, 'MMMM dd, yyyy');
}