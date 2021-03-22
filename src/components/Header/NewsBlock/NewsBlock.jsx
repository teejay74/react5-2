/**
 * Блок новостей - состоит из заголовка (NewsHeader) и непосредственно списка новостей (News)
 */
 import NewsHeader from './NewsHeader/NewsHeader';
 import News from './News/News';
 import { useState } from 'react';
 
  export default function NewsBlock() {
 
     const headers = ['Сейчас в СМИ', 'Главное', 'Рекомендуемое'];
     const newsList = [
         {
             groupe: 'Сейчас в СМИ',
             icon: 'hot',
             text: 'Сегодня произошло нечто важное'
         },
         {
             groupe: 'Сейчас в СМИ',
             icon: 'money',
             text: 'Сегодня произошло нечто важное с деньгами'
         }
     ];
 
 
     const [active, SetActive] = useState('Сейчас в СМИ');
 
     const OnActive = (val) => {
         SetActive(val);
     }
 
     return(
         <div className="NewsBlock">
         <NewsHeader headers={headers} active={OnActive}/>
         <News active={active} newsList={newsList}/>
         </div>
     )
  }