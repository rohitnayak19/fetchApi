import React, { useState, useEffect } from 'react'
const App = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if(!response.ok){
        throw new Error('Network response are not ok')
      }
      return response.json()
    })
    .then((data) =>{
      setData(data)
    })
    .catch((error) => {
      setError(error)
    })
  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleRemove = (id) => {
    const afterFilter = data.filter((item) => item.id !== id);
    setData(afterFilter)
  }
  
  return (
    <>
    
    <div>
      <h1>Fetch data for Api</h1>

      {data ? (
        data.map((item) => (
          <div key={item.id} style={{display: 'flex', gap:'10px'}}>
            <p>{item.id} : {item.title}</p>
            <button onClick={() => handleRemove(item.id)}>Remove title</button>
          </div>
        ))
      ) : (
        /* From Uiverse.io by mrhyddenn */ 
<div class="spinner center">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
</div>
      )}
    </div>
    </>
  )
}

export default App