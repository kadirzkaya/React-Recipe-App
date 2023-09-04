import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [category, setCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [filterFood, setFilterFood] = useState(foods)

  const getCategory = async () => {
    const response = (await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")).data;
    setCategory(response.meals);
  }

  useEffect(() => {
    getCategory();
  }, [])

  const handleSelect = async (e) => {
    if (e.target.value) {

      const food = (await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.value}`)).data;
      setFoods(food.meals);
      setFilterFood(food.meals);
    } else {
      setFoods([])
      setFilterFood([])
    }
  }

  const renderedCategory = category.map((item) => {
    return (
      <option key={item.strCategory} value={item.strCategory}>{item.strCategory}</option>
    )
  })

  const renderedFoods = filterFood.map((food) => {
    return (
      <div className="card mb-3 w-25" key={food.idMeal}>
        <div>
          <img src={food.strMealThumb} className="img-fluid rounded-start" alt="food" />
        </div>
        <div className="card-body">
          <p className="card-text">{food.strMeal}</p>
        </div>
      </div>
    )
  })

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    let updatedList = [...foods];

    updatedList = updatedList.filter((item) => {
      return item.strMeal.toLowerCase().indexOf(search.toLowerCase())>-1;
    })

    setFilterFood(updatedList);
    setSearch("")
  }

  return (
    <div className='mt-5'>
      <form className='w-50 mx-auto d-flex column-gap-3 justify-content-center mb-5' onSubmit={handleSubmitSearch}>
        <input type='search' placeholder='Search' className='rounded' value={search} onChange={handleSearch} />
        <button className='btn btn-primary'>Search</button>
        <select onChange={handleSelect} defaultValue="Select Category" className='p-2 rounded'>
          <option value="">Select Category</option>
          {renderedCategory}
        </select>
      </form>
      <div className='d-flex flex-row flex-wrap gap-3 justify-content-center'>
        {renderedFoods}
      </div>
    </div>
  )
}

export default Home