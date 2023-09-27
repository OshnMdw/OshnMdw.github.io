import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title:'React Portfolio',
    github: 'https://github.com',
    details: ''
  },
  {
    id: 2,
    image: IMG1,
    title:'Job Finder',
    github: 'https://github.com',
    details: ''
  },
  {
    id: 3,
    image: IMG1,
    title:'Drive Smart',
    github: 'https://github.com',
    details: ''
  },
  {
    id: 4,
    image: IMG1,
    title:'Talk Together',
    github: 'https://github.com',
    details: ''
  },
  {
    id: 5,
    image: IMG1,
    title:'Cosmic Ways',
    github: 'https://github.com',
    details: ''
  },
  {
    id: 6,
    image: IMG1,
    title:'Leo Scroll',
    github: 'https://github.com',
    details: ''
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
        {
          data.map(({id, image, title, github, details}) =>{
            return(
              <article key={id} className='project__item'>
                <div className='project__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='project__item-cta'>
                  <a href={github} className='btn'>GitHub</a>
                  <a href={details} className='btn btn-primary'>More Details</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects