import numbro from 'numbro'
import React, { ReactNode } from 'react'

export default function ResultItem(props: {
  total: number
  text: string
  suffix?: ReactNode
}) {
  return (
    <div className=''>
      <p className='text-lg'>{props.text}</p>
      <p className='font-[600] text-[28px]'>
        {numbro(props.total)
          .format({
            mantissa: 0,
            thousandSeparated: true
          })} {props.suffix ?? '฿'}
      </p>
    </div>
  )
}
