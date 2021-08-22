import React from 'react'

const Select = ({ className, options, setValue }) => {
  if (!options || options.length <= 0) return null
  return (
    <select
      className={`bg-asphalt-ddd focus:outline-none px-3 py-1 rounded-lg text-azap-dark ${className || ''}`}
      onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default Select
