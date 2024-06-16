import React, { FC } from 'react'
import Button from '../Button/Button'
import scissors from '../../assets/icon-scissors.svg'
import paper from '../../assets/icon-paper.svg'
import rock from '../../assets/icon-rock.svg'
import triangle  from '../../assets/bg-triangle.svg'

const Game: FC = () => {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-5 w-full'>
        <Button position='absolute top-52 right-[29.5rem]' border='border-green-500' onClick={() => console.log('asads')}>
          <img src={scissors} className='w-14 h-14' alt="Scissors" />
        </Button>
        <Button position='absolute top-52 left-[30rem]' border='border-indigo-500' onClick={() => console.log('trctcrt')}>
          <img src={paper} className='w-14 h-14' alt="Paper" />
        </Button>
        <Button position='absolute top-[30rem] left-[39rem]' border='border-rose-600' onClick={() => console.log('trctcrt')}>
          <img src={rock} className='w-14 h-14' alt="Rock" />
        </Button>
        {/* <img src={triangle} alt="triangle" className='mx-auto mt-[104px] relative z-0' /> */}
      </div>
    </section>
  )
}

export default Game