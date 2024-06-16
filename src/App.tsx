import { FC } from "react"
import Header from "./components/Header/Header"
import Game from "./components/Game/Game"
import Footer from "./components/Footer/Footer"

const App: FC = () => {
  return (
    <>
      <Header />
      <Game />
      <Footer />
    </>
  )
}
export default App

