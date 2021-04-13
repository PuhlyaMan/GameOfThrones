import React, { useMemo, useCallback } from 'react'
import cc from 'classcat'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

import { pageSize, currentPage, totalData } from '@app/stores/PaginateStore'

import s from './Pagination.module.css'

interface PaginationProps {
  to: string
}

const Pagination: React.FC<PaginationProps> = ({ to }: PaginationProps) => {
  const pS = useRecoilValue(pageSize)
  const [cP, setCurrentPage] = useRecoilState(currentPage)
  const tD = useRecoilValue(totalData)

  const pageNumbers = useMemo(() => Array.from({ length: Math.ceil(tD / pS) }, (_, k) => k + 1), [tD, pS])
  const disableLeft = useMemo(() => cP === 1, [cP])
  const disableRight = useMemo(() => cP === pageNumbers.length, [cP, pageNumbers])

  const handleClick = useCallback(
    (curr: number) => (): void => {
      setCurrentPage(curr)
    },
    [setCurrentPage]
  )

  return (
    <div className={s.root}>
      <Link
        rel="prev"
        to={`/${to}?page=${cP - 1}?pageSize=${pS}`}
        onClick={handleClick(cP - 1)}
        className={cc([s.page, { [s.disabled]: disableLeft }])}
      >
        {'<'}
      </Link>
      {pageNumbers.map((number) => {
        return (
          <Link
            key={number}
            to={`/${to}?page=${number}?pageSize=${pS}`}
            onClick={handleClick(number)}
            className={cc([s.page, { [s.active]: cP === number }])}
          >
            {number}
          </Link>
        )
      })}
      <Link
        to={`/${to}?page=${cP + 1}?pageSize=${pS}`}
        onClick={handleClick(cP + 1)}
        className={cc([s.page, { [s.disabled]: disableRight }])}
      >
        {'>'}
      </Link>
    </div>
  )
}

export default Pagination
