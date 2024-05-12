import { Button, Group, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { forwardRef } from 'react'
import { FaInfoCircle } from "react-icons/fa"
import { MdOutlinePercent } from "react-icons/md"
import { INITIAL_LOAN_VALUE } from './constants'

export type LoanValue = {
  total: number
  down: number
  interest: number
  year: number
}

const TooltipComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props} className='inline-flex justify-center items-center'>
    <FaInfoCircle className='text-[22px] inline ml-1' />
  </div>
))

export default function FormContent(props: {
  onChange: (value: LoanValue) => void
}) {
  const form = useForm<LoanValue>({
    mode: 'uncontrolled',
    initialValues: INITIAL_LOAN_VALUE,
    validate: {
      total: (value) => validateNumber(value),
      down: (value) => validateNumber(value),
      interest: (value) => validateNumber(value),
      year: (value) => validateNumber(value),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => props.onChange(values))}
      onReset={() => {
        form.reset()
        props.onChange(INITIAL_LOAN_VALUE)
      }}
    >
      <NumberInput
        // withAsterisk
        thousandSeparator=","
        classNames={{
          label: 'mb-2',
          description: 'font-prompt',
          control: 'font-sans',
          input: 'font-prompt',
          wrapper: 'font-prompt'
        }}
        className='!font-prompt'
        size='md'
        label="จำนวนเงินทั้งหมดในการกู้"
        placeholder="เงินกู้"
        key={form.key('total')}
        rightSectionPointerEvents="none"
        hideControls
        rightSection={<span className='mr-2 text-[16px]'>฿</span>}
        {...form.getInputProps('total')}
      />
      <NumberInput
        size='md'
        mt="md"
        classNames={{
          label: 'mb-2'
        }}
        // withAsterisk
        label="เงินดาวน์"
        placeholder="เงินดาวน์"
        key={form.key('down')}
        rightSectionPointerEvents="none"
        rightSection={<MdOutlinePercent className='mr-2 text-[18px]' />}
        max={100}
        hideControls
        {...form.getInputProps('down')}
      />
      {/* <Select
        {...form.getInputProps('bank')}
        classNames={{
          label: 'mb-2 !flex  !items-center'
        }}
        size='md'
        mt="md"
        key={form.key('bank')}
        comboboxProps={{ withinPortal: true }}
        data={INTEREST_BANKS.map((interest) => interest.name)}
        placeholder="Pick one"
        label={<>
          <span>อัตราดอกเบี้ยธนาคาร</span>
          <Tooltip label='วันที่อัพเดท อัตราดอกเบี้ย 19/07/2018' >
            <TooltipComponent />
          </Tooltip>
        </>}

        onChange={(value) => {
          form.setFieldValue('interest', INTEREST_BANKS.find(i => i.name === value)?.rate || 0)
        }}
      /> */}

      <NumberInput
        size='md'
        mt="md"
        classNames={{
          label: 'mb-2'
        }}
        // withAsterisk
        label="อัตราดอกเบี้ย"
        placeholder="ดอกเบี้ย"
        key={form.key('interest')}
        rightSectionPointerEvents="none"
        rightSection={<MdOutlinePercent className='mr-2 text-[18px]' />}
        max={100}
        hideControls
        {...form.getInputProps('interest')}
      />
      <NumberInput
        // withAsterisk
        classNames={{
          label: 'mb-2'
        }}
        mt="md"
        mb="md"
        size='md'
        label="ระยะเวลากู้"
        placeholder="ระยะเวลา"
        key={form.key('year')}
        rightSectionPointerEvents="none"
        rightSection={<span className='mr-1 text-[16px]'>ปี</span>}
        thousandSeparator=","
        max={100}
        hideControls
        {...form.getInputProps('year')}
      />
      <Group justify="center" mt="md">
        <Button
          bg={'rgb(224, 235, 243)'}
          className='!w-20 !text-gray-600 hover:brightness-95'
          type="reset"
        >
          รีเซ็ต
        </Button>
        <Button style={{
          background: '#FFC401'
        }}
          className='!w-20 hover:brightness-105'
          type="submit"
        >
          คำนวน
        </Button>
      </Group>
    </form>
  )
}

function validateNumber(value: any) {
  return typeof value === 'number' && value >= 0 ? null : 'กรุณากรอกข้อมูล'
}
