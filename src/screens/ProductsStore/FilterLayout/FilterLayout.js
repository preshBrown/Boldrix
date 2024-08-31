import React, { forwardRef} from 'react'
import classes from "./FilterLayout.module.css"
import FilterCard from './FilterCard/FilterCard'
import { forCategory, forBrand, forCollection,  }  from "./FilterData"
import FilterInputs from './FilterInputs/FilterInputs'

const FilterLayout = (props) => {
console.log("🚀 ~ FilterLayout ~ FilterLayout:")


    const filterInputHandler = (e) => {
    console.log("🚀 ~ filterInputHandler ~ e:", e)
    }



  return (
    <section className={`${classes.Filter_Layout} ${props.className}`}> 
    <FilterCard header="Brands" data={forBrand}  />
    <FilterCard header="Categories" data={forCategory}  />
    <FilterCard priceInputs header="Collections" data={forCollection}  >
        <FilterInputs changed={(e) => {filterInputHandler(e)}} />
    </FilterCard>
    </section>
  )
}

export default FilterLayout