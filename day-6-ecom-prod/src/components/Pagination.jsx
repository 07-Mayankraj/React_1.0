function Pagination(props){
    const {handlePageChange , page ,lastPage} = props

    return <div className='pagination'>


    <button onClick={()=>handlePageChange(-1)} disabled = {page === 1} >Prev</button>
    <button>{page}</button>
    <button onClick={()=>handlePageChange(+1)} disabled ={page === lastPage}>Next</button>

  </div>
}

export default Pagination