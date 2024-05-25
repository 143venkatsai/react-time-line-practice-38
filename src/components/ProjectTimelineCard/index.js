import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  return (
    <div className="project-container">
      <img
        src={projectDetails.imageUrl}
        alt="project"
        className="project-img"
      />
      <div className="project-title-container">
        <h1 className="project-title">{projectDetails.projectTitle}</h1>
        <div className="project-duration">
          <AiFillCalendar />
          <p className="duration">{projectDetails.duration}</p>
        </div>
      </div>
      <p className="description">{projectDetails.description}</p>
      <a className="visit-link" href={projectDetails.projectUrl}>
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard
