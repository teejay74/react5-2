/**
 * В данном компоненте с помощью функции map обрабатывается массив топиков, создавая на каждый элемент компонент Topic, с атрибутами наименование, тип, контент.
 */
 import Topic from './Topic/Topic';


 export default function Topics() {
     const topicsList= [{
         title: 'Погода',
         type: 'weather',
         content: ['content']
     },
     {
         title: 'Телепрограмма',
         type: 'tv',
         content: ['21:00 Программа 1', '22:00 Программа 2']
     }
 
 ];
 
     return(
         <div className="Topics">
             {topicsList.map((topic,index) => <Topic key={index} title={topic.title} type={topic.type} content={topic.content}/>)}
         </div>
     )
 }