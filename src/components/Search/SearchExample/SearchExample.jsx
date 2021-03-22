  
/**
 *  Компонент отрисовки примера поиска. Получает в качестве props текст для вывода.
 */

 export default function SearchExample(props) {
    return(
        <span className="Example">{props.text}</span>
    )
}