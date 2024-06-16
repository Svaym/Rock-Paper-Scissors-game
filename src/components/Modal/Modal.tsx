import React, { FC } from 'react'
import rules from '../../assets/image-rules.svg'
import closeImg from '../../assets/icon-close.svg'
import { useAppDispatch } from '../Redux/hooks/useAppDispatch'
import { close } from '../Redux/reducers/modalReducer'

const Modal: FC = () => {
  const dispatch = useAppDispatch()
  const closeModal = (): void => {
    dispatch(close())
  }
  return (
    <section>
      <div onClick={closeModal} className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 h-[22rem] rounded-md w-1/3">
          <button onClick={closeModal} className='block ml-auto transition duration-500 hover:blur-lg'>
            <img src={closeImg} alt="close" />
          </button>
          <img src={rules} className='mx-auto' alt="Rules" />
        </div>
    </section>
  )
}

export default Modal
