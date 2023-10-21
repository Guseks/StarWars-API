import React from 'react'
import "./container.css"

const Container = ({type, children} ) => {

  const containerClass = `container-${type}`;
  console.log(containerClass);

  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}

export default Container