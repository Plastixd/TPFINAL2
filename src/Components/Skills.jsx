import React from 'react'


function Skills({title,img,text}) {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

Skills.propTypes = {

}

export default Skills

