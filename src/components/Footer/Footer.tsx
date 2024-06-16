import { FC } from 'react'
import Modal from '../Modal/Modal'
import { useAppDispatch } from '../Redux/hooks/useAppDispatch'
import { useAppSelector } from '../Redux/hooks/useAppSelector'
import { open } from '../Redux/reducers/modalReducer'

const Footer: FC = () => {
  const isModalOpen = useAppSelector(state => state.modal.value)
  const dispatch = useAppDispatch()
  const openModal = (): void => {
    dispatch(open())
  }
  return (
    <footer>
      {isModalOpen && <Modal />}
      <div className='mx-auto max-w-7xl w-full px-5'>
        <button onClick={openModal} className='border-2 block ml-auto mt-3 w-24 h-12 rounded-lg border-slate-500 text-white transition duration-300 ease-linear hover:brightness-150'>
          <h3 className='uppercase'>
            rules
          </h3>
        </button>
      </div>
    </footer>
  )
}

export default Footer