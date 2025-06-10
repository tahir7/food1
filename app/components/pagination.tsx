'use client'
import { Button, Flex } from '@radix-ui/themes';
import React, { use } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface props {
    itemCount : number;
    pageSize : number;
    currentPage : number;
}

const Pagination = ({itemCount,  pageSize, currentPage } :props) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    console.log("In Pagination ")

    const pageCount = Math.ceil(itemCount/pageSize);

    console.log("In Pagination pageCount:", pageCount)

    if (pageCount === 1) return null;

   const changePage = (page : number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push('?' + params.toString());
   }

  return (
    <Flex align="center" gap="3">
    <Text size="3">Page  {currentPage} of { pageCount} </Text>
    <Button color='gray' variant='soft' disabled = { currentPage === 1 }
        onClick={() => changePage(1)}>
        <RxDoubleArrowLeft />
      </Button>
    
      <Button color='gray' variant='soft' disabled = { currentPage === 1 }
        onClick={() => changePage(currentPage - 1)}>
        <BiChevronLeft />
      </Button>

      <Button color='gray' variant='soft' disabled = { currentPage === pageCount }
       onClick={() => changePage(currentPage + 1)}>
        <BiChevronRight />
      </Button>

      <Button color='gray' variant='soft' disabled = { currentPage === pageCount }
       onClick={() => changePage(pageCount)}>
        <RxDoubleArrowRight />
      </Button>
    
    </Flex>
  )
}
export default Pagination