/*
 * Верхняя часть страницы, содержит в себе Блок новостей (NewsBlock), курсы валют (Currency) и стороннюю информацию (Aside), которая через атрибуты передается картинка, ссылка и текст. 
*/
import NewsBlock from './NewsBlock/NewsBlock';
import Currency from './Currency/Currency';
import Aside from './Aside/Aside';

export default function Header() {

    const asideText = 'Текст для боковой ссылки';
    const asideLink = 'http://ya.ru';
    const asideImg = 'https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_960_720.png';

    return (
        <>
        <NewsBlock />
        <Currency />
        <Aside text={asideText} link={asideLink} img={asideImg}/>
         </>
    )
}