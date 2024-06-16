import { FC, useState } from 'react'
import Button from '../Button/Button'
import scissors from '../../assets/icon-scissors.svg'
import paper from '../../assets/icon-paper.svg'
import rock from '../../assets/icon-rock.svg'
import { useAppDispatch } from '../Redux/hooks/useAppDispatch'
import { increment, decrement } from '../Redux/reducers/countReducer'

const Game: FC = () => {
  const dispatch = useAppDispatch()
  const countIncrement = (): void => {
    dispatch(increment())
  }
  const countDecrement = (): void => {
    dispatch(decrement())
  }
  const [result, setResult] = useState('game')
  //  Выбор компьютера
  const [computerChoice, setComputerChoice] = useState<string>('')
  //  Выбор игрока
  const [playerChoice, setPlayerChoice] = useState<string>('')
  const arr:string[] = ['rock', 'paper', 'scissors']
  const choiceAction = (action: string): void => {
    setPlayerChoice(action)
    generateComputerChoice()
  }
  const generateComputerChoice = (): void => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setComputerChoice(arr[randomIndex])
    determineWinner()
  }
  const determineWinner = (): void => {
    if (playerChoice === computerChoice) {
      setResult('Draw')
    } else if (((playerChoice === 'paper') && (computerChoice === 'rock')) || ((playerChoice === 'rock') && (computerChoice === 'scissors')) || ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
      countIncrement()
      setResult('You Win')
    } else {
      countDecrement()
      setResult('You Lose')
    }
  }
  return (
    <section className=''>
      <div className='mx-auto max-w-7xl px-5 w-full'>
        <div className='flex flex-col items-center gap-y-3 mt-5'>
          <h2 className='text-white uppercase text-xl font-semibold'>
            The House Picked:
          </h2>
          <h2 className='bg-white rounded-full p-7 uppercase text-lg mx-auto tracking-widest'>
            { computerChoice }
          </h2>
        </div>
        <h1 className={result !== 'game' ? 'text-2xl font-extrabold text-white text-center uppercase my-7' : 'text-2xl font-extrabold opacity-0'}>
          { result }
        </h1>
        <div className='flex items-center justify-center gap-x-8'>
          <Button border='border-green-500' onClick={() => choiceAction('scissors')}>
            <img src={scissors} className='w-14 h-14' alt="Scissors" />
          </Button>
          <Button border='border-indigo-500' onClick={() => choiceAction('paper')}>
            <img src={paper} className='w-14 h-14' alt="Paper" />
          </Button>
          <Button border='border-rose-600' onClick={() => choiceAction('rock')}>
            <img src={rock} className='w-14 h-14' alt="Rock" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Game
