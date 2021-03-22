/**
 * Список новостей. Принимает в props массив новостей от компонента NewsBlock. Представляет собой список ul, внутри которого с помощью функции map обрабатывается массив новостей и на каждую новость создается компонент NewsUnit. 
 * В NewsUnit в атрибуты передаются иконка, текст и ссылка. 
 */
 import NewsUnit from './NewsUnit/NewsUnit';

 export default function News(props) {
    const res = props.newsList.filter(el => el.groupe===props.active);
    return(
        <div className="News">
            <ul className="NewsList">
                {res.map((el,index) => <NewsUnit key={index} icon={el.icon} text={el.text} />)}
            </ul>
        </div>
    )
 }