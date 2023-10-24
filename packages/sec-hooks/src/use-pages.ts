import { useReducer, useState } from 'react'

/**
 *  table分页
 */
type State = Record<string, any> & { loading: boolean; refresh: number }
type Options = {
  size?: number
}

/**统一处理 antd table 查询和分页参数 */
export default function usePages(initSearchParams?: Record<string, any>, defaultOptions?: Options) {
  const initPagState = {
    ...initSearchParams,
    loading: false,
    refresh: 0
  }

  const pagReducer = (state: State, action: Partial<State>) => {
    return {
      ...state,
      ...action
    }
  }
  const [pgState, dispatch] = useReducer(pagReducer, initPagState)

  const [totalPage, setTotalPage] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(defaultOptions?.size || 20)
  const [pageSizeOptions, setPageSizeOptions] = useState(['10', '20', '50', '100'])
  const changePage = (page: number, size?: number) => {
    pageSize === size ? setPageNum(page) : setPageNum(1)
    size && setPageSize(size)
  }

  return {
    pgState,
    dispatch,
    pagination: {
      showSizeChanger: true,
      showTotal: () => `共 ${totalPage} 条`,
      total: totalPage,
      current: pageNum,
      pageSize,
      pageSizeOptions,
      onChange: changePage
    },
    totalPage,
    pageNum,
    pageSize,
    setTotalPage,
    setPageNum,
    setPageSize,
    setPageSizeOptions
  }
}
