import React, { useEffect, useState } from 'react';
// import MoviList from '../components/movie/MoviList';
import { fetcher } from '../config';
import useSWR from "swr";
import MoviCard from '../components/movie/MoviCard';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from 'react-paginate';


const pageCount = 5;
const MoviesPage = () => {


    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    
    const [nextPage,setNextPage] = useState(1);
    const [filter,setFilter] = useState(" ");
    const [url,setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=82f981a5eeb9176fcf0342b76912bc77&page=${nextPage}`);
    const filterDebounce = useDebounce(filter,500);
    const handleFilter  = (e) => {
        setFilter(e.target.value);
    };
    const {data,error} = useSWR ( url, fetcher);
    const loading = !data && !error;
   useEffect(() => {
    if(filterDebounce) {
        setUrl(
            `https://api.themoviedb.org/3/search/movie?api_key=82f981a5eeb9176fcf0342b76912bc77&query=${filterDebounce}&page=${nextPage}`);
    } else {
        setUrl(
            `https://api.themoviedb.org/3/movie/popular?api_key=82f981a5eeb9176fcf0342b76912bc7`
        );
    }
   },[filterDebounce,nextPage]);
   if(!data) return null;
   const movies = data ?.results || [];
     const {page, total_pages}= data;
    return (
        <div className='py-10 page-container'>
            <div className="flex mb-10">
                <div className="flex-1">
                    <input onChange={handleFilter}  type="text" className='w-full p-4  outline-none  bg-slate-800 text-white ' placeholder= " Type here to search...." />
                </div>
                <button className='p-4 bg-primary text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                 </svg>
                </button>
            </div>
         {loading && (
            <div className='w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin'></div>
         )}   
        <div className="grid grid-cols-4 gap-10">
            {!loading && movies.length > 0 &&
            movies.map((item) => (
                <MoviCard key={item.id} item={item}></MoviCard>
            ))}
        </div>
        <div className="flex items-center justify-center mb-10 gap-x-5">
            <span className='cursor-pointer'
            onClick= {() => setNextPage(nextPage - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

            </span>
            {new Array(pageCount).fill(0).map((item,index) => (
            <span key= {item} className='cursor-pointer inline-block bg-white text-slate-900 leading-none py-2 px-4 rounded-md' >{index + 1}</span>
            ))}
            <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"
            onClick= {() => setNextPage(nextPage + 1)}>

  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</span>
        </div>
        </div>
    );
};

export default MoviesPage;