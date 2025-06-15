import { Heading } from "@radix-ui/themes";
import Pagination from "./components/pagination";

export default function Home( {searchParams} : {searchParams : { page : string }}) {
  return (
    <div>       
      <Heading align="center" as = "h1" 
      
      className="pt-3"> Home-cooked Healty and Halal Food </Heading>
      {/* <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />      */}
   </div>
  );
}
