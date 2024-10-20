
import Card from "./components/Card";
import './App.css'

function App() {

  let aboutOm = `"Welcome to my page. Here I am Practicing React Props."`
  let aboutPooja = `"Welcome to my page. Here I am Practicing React Props with Tailwind."`

  return (
    <>
    <h1 className='bg-blue-400 text-black p-5 rounded-2xl mb-4'>Tailwind Test</h1>
    <Card username="Om Darade" profession="Full Stack Web Developer" description={aboutOm}/>
    <Card username="Pooja Darade" profession="Data Analyst" description={aboutPooja}/>
    </>
  )
}

export default App
