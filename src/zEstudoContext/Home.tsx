import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycloForm() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>New Cyclo Form: {activeCycle}</h1>
}

function Countdown() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      Countdown: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycloForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
