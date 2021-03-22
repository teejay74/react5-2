/**
 * Блок поиска 
 */
 import Logo from './Logo/Logo';
 import SearchInput from './SearchInput/SearchInput';
 import SearchExample from './SearchExample/SearchExample';
 
 
 export default function Search() {
 
 const example = 'Найдется почти всё.';
 
     return(
         <>
         <div className="SearchBlock">
             <Logo />
             <SearchInput />
         
         </div>
         <div>
             <SearchExample text={example} /> 
         </div>
         </>
     )
 }