/**
 *  Компонент отрисовки рекламного баннера. Получает в качестве props ссылку и изображение.
 */

 export default function Banner(props) {
     
    return(
        <div className="Ads">
            <a className="AdsLink" href={props.link}>
            <img className="AdsImg" src={props.img} alt="ads"></img>
            </a>
       </div>
       
    )
}