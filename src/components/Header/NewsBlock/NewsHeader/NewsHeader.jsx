/**
 * Заголовок новостей - состоит из 3 кнопок - фильтров новостей  и даты/времени. В зависимости от выбранного фильтра в компонент NewsBlock возвращается значение фильтра, которое влияет на массив новостей, отправляемый в компонент News.
 */

 export default function NewsHeader(props) {
    const setActive = (e) => {
        props.active(e.target.textContent);
    }
    
         return (
             <div className="Headers">
             {props.headers.map((header,index) => <span key={index} className="Header" onClick={setActive}>{header}</span>)}
             </div>
         )
     }