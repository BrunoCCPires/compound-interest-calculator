import { useState } from 'react'
import './App.css'

function App() {
  const [principal, setPrincipal] = useState('')
  const [monthlyContribution, setMonthlyContribution] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [period, setPeriod] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal)
    const pmt = parseFloat(monthlyContribution)
    const r = parseFloat(interestRate) / 100 / 12 // Monthly interest rate
    const t = parseFloat(period) * 12 // Total months

    if (isNaN(p) || isNaN(pmt) || isNaN(r) || isNaN(t)) {
      alert('Por favor, preencha todos os campos com valores válidos')
      return
    }

    // Calculate compound interest with monthly contributions
    const amount = p * Math.pow(1 + r, t) + 
                   pmt * ((Math.pow(1 + r, t) - 1) / r)

    setResult(Number(amount.toFixed(2)))
  }

  return (
    <div className="calculator">
      <h1>Calculadora de Juros Compostos</h1>
      
      <div className="input-group">
        <label>Investimento Inicial (R$):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Ex: 1000"
        />
      </div>

      <div className="input-group">
        <label>Aporte Mensal (R$):</label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(e.target.value)}
          placeholder="Ex: 100"
        />
      </div>

      <div className="input-group">
        <label>Taxa de Juros Anual (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Ex: 12"
        />
      </div>

      <div className="input-group">
        <label>Período (anos):</label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder="Ex: 5"
        />
      </div>

      <button onClick={calculateCompoundInterest}>Calcular</button>

      {result !== null && (
        <div className="result">
          <h2>Montante Final:</h2>
          <p>R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </div>
      )}
    </div>
  )
}

export default App