/**
 * Компонент состоящий из формы с input и кнопкой.
 */

 export default function SearchInput() {

    const onSearch = () => {
    }

    const onChangeHandler = () => {
    }

     return(
         <form className="SearcForm" onSubmit={onSearch}>
             <input className="Input" onChange={onChangeHandler}></input>
             <button className="Button">Найти</button>
         </form>
     )
 }