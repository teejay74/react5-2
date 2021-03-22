/**
 * Вывод курса валют
 */
 import CurrencyUnit from './CurrencyUnit/CurrencyUnit';

 export default function Currency() {
 
     const currArr = [
         {
             value: 80,
             type: 'EUR',
             diff: '+0.2'
         },
         {
             value: 70,
             type: 'USD',
             diff: '+0.3'
         }
 ]
 
     return(
         <div className="CurrList">
             {currArr.map((cur,index) => <CurrencyUnit key={index} unit={cur}/>)}
         </div>
     )
 }