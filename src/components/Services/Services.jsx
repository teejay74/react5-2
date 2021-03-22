/**
 * Блок с различными сервисами сайта. 
 */
 import Service from './Service/Service';

 export default function Services() {
     
     const list = ['Видео', 'Картинки', 'Новости', 'Маркет', 'Переводчик']
     
     return(
         <div className="Services">
             {list.map((func,index) => <Service key={index} text={func}/>)}
         </div>
     )
 }