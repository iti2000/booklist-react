import React,{ createContext, useReducer,useEffect} from 'react';


import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
     const [books,dispatch] = useReducer(bookReducer,[],()=>{
          const localData = localStorage.getItem('books');
          return localData ? JSON.parse(localData) : [];
     });

// useEffect(()=>{
//      if(books.length>0)
//      localStorage.getItem('books',JSON.parse(books))
// },[])

useEffect(()=>{

     localStorage.setItem('books',JSON.stringify(books))

},[books])     

// const BookContextProvider = (props)=>{
//     const [books,setBooks] = useState([
//         {title:'iti', author:'iti patel',id:1},
//        { title:'meet', author:'meet patel',id:2}
//    ]);
//    const addBook = (title,author)=>{
//         setBooks([...books,{title,author,id: uuidv1()}])
//    };
//    const removeBook= (id)=>{
//         setBooks(books.filter(book => book.id!==id))
//    }
   return(
       <BookContext.Provider value={

            {books,
            dispatch}
       }>
        {props.children}
       </BookContext.Provider>
   )
}

export default BookContextProvider;