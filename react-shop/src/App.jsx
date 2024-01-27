import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Category from './components/Category/Category'
import Button from './components/UI/Button/Button'

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:8000/api/test')
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      console.log(`Error fetching data:  ${err}`)
    });
  })
  const categoriesData = [
    {key: 1, img: 'https://nazya.com/anyimage/img.alicdn.com/imgextra/i3/1655549430/TB2bJfWXOsX61BjSszhXXbzWpXa_!!1655549430.jpg', title: 'Куртки',},
    { key:2, img: 'https://www.gov.kz/uploads/2022/11/3/24ddaa05d52af8223540575ffcbf27e2_original.207763.jpg', title: 'Обувь'}
  ]


  
  return (
    <>
      <Header/>
      <main>
        <div className='categories'>
            {
              categoriesData.map((item, index) =>(
                <Category key={index} {...item}/>
              ))
            }
        </div>
        <Button onClick={()=>console.log('test')}>Click me</Button>
      </main>
    </>
  )
}

export default App
