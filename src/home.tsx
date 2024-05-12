import { Box } from '@mantine/core'
import React, { useMemo, useState } from 'react'
import { INITIAL_LOAN_VALUE } from './components/constants'
import FormContent, { LoanValue } from './components/form-content'
import ResultItem from './components/result-item'
import { calculateMonthlyPayment } from './components/utils'

export default function Page() {
  const [loanValue, setLoanValue] = useState<LoanValue>(INITIAL_LOAN_VALUE)
  const totalDown = loanValue.total * loanValue.down / 100
  const totalLoan = loanValue.total - totalDown
  const paidPerMonth = useMemo(() => (calculateMonthlyPayment(totalLoan, loanValue.interest / 100, loanValue.year * 12)), [totalLoan, loanValue])

  return (
    <div className='h-[50vw] m-auto p-8'>
      <Box mx="auto" className='border-1 border-red-50 shadow-xl'>
        <div  >
          {/* <h1 className='text-2xl font-[500] text-center mb-4'>
            คำนวณสินเชื่อและเงินกู้
          </h1> */}
          <div className='border-[#003053] border-2 rounded-[8px]'>
            <h2 className='font-[500] text-xl text-center bg-[#003053] text-white py-2'>
              คำนวณสินเชื่อและเงินกู้
            </h2>
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1 py-8 px-16 border-r-[1px]'>
                <FormContent onChange={setLoanValue} />
              </div>
              <div className='flex-1 result py-8 px-16'>
                <p className='text-xl font-[500] '>ผลการคำนวนสินเชื่อ</p>
                <div className='border-b-[1px] border-slate-200 py-4'>
                  <ResultItem text={'การชำระค่าจำนองรายเดือน'} total={paidPerMonth} />
                </div>
                <div className='border-b-[1px] border-slate-200 py-4'>
                  <ResultItem text={'จำนวนเงินกู้'} total={totalLoan} />
                </div>
                <div className=' py-4'>
                  <ResultItem text={'เงินดาวน์'} total={totalDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
