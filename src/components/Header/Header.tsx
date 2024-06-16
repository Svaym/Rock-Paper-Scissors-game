import React, { FC } from 'react'
import { useAppSelector } from '../Redux/hooks/useAppSelector'
import { useAppDispatch } from '../Redux/hooks/useAppDispatch'
import { increment, decrement } from '../Redux/reducers/countReducer'

const Header: FC = () => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()
  const countIncrement = (): void => {
    dispatch(increment())
  }
  const countDecrement = (): void => {
    dispatch(decrement())
  }
  return (
    <>
      <section className='pt-7'>
        <div className='mx-auto max-w-7xl px-5 w-full'>
          <div className='border-4 border-slate-500 flex items-center justify-between pl-8 pr-5 py-3 rounded-lg'>
            <div className='text-white uppercase font-semibold'>
              <h2>
                Scissors
              </h2>
              <h2>
                Paper
              </h2>
              <h2>
                Rock
              </h2>
            </div>
            <div className='bg-white rounded-lg text-blue-950 py-3 px-7 text-center'>
              <h2 className='tracking-[0.2em] uppercase' onClick={countDecrement}>
                Score
              </h2>
              <h1 className='font-extrabold text-5xl' onClick={countIncrement}>
                { count }
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
