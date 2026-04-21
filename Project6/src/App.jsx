import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import { useEffectEvent } from 'react'
import ThemeBtn from './components/btn'
import Card from './components/card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }


  //actual theme change

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>


    </ThemeProvider>
  )
}

export default App
