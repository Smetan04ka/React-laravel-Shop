import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/header/Header'
import Category from './components/Category/Category'



function App() {
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    img: '',
    id: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/add-new-category', formData)
      .then(response => {
        
        console.log(response.data)
        
      }).catch(error => {
        console.log(error)
      })

  }

 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get-categories')
      .then(response => {
        setCategories(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className='categories'>
          {categories.map((item) => (
            <Category {...item} key={item.id} />
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input name='title' onChange={handleChange} value={formData.title} type="text" placeholder='title' />
            <input name='img' onChange={handleChange} value={formData.img} type="text" placeholder='img' />
            <button type='submit' >Add</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App