import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import { useSearchParams } from 'react-router'

const SearchPage = () => {
  const [searchParams]= useSearchParams();
  const search= searchParams.get("search")
  return (
    <Gallery search={search} />
  )
}

export default SearchPage