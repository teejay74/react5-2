/**
 * Создается блок с топиков, состоящий из наименования и контента (Content). В качестве props компонент получает наименование, тип и контент. В компонент Content в качестве атрибута передается тип топика и сам контент.
 */ 

 import Content from './Content/Content';

 export default function Topic(props) {
     return(
         <div className="Topic">
            <h2 className="TopicHeader">{props.title}</h2>
            <Content type={props.type} content={props.content}/>
         </div>
     )
 }