import Pagination from "./components/pagination";

export default function Home( {searchParams} : {searchParams : { page : string }}) {
  return (
    <div>       
      <h1> Lunch Box </h1>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />     
   </div>
  );
}
