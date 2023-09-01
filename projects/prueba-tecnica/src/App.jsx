import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState('lorem ipsum')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
    console.log(fact)
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  );
}
