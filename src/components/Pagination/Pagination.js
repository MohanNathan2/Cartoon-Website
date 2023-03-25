import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info,pageNumber,setPageNumber}) => {
  return <ReactPaginate
  className="pagination justify-content-center gap-4 my-4"
  nextLabel="Next"
  previousLabel="prev"
  nextClassName="btn btn btn-primary next"
  previousClassName="btn btn-primary prev"
  pageCount={info?.pages}
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeclassName="active"
  marginPagesDisplayed={3}
  forcePage={pageNumber ===1? 0 : pageNumber -1} 
  onPageChange={(data) => {
    setPageNumber(data.selected +1)}}
  />
}

export default Pagination
