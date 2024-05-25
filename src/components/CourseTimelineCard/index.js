import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  return (
    <div className="course-container">
      <div className="course-title-duration">
        <h1 className="course-title">{courseDetails.courseTitle}</h1>
        <div className="course-duration">
          <AiFillClockCircle />
          <p className="duration">{courseDetails.duration}</p>
        </div>
      </div>
      <p className="description">{courseDetails.description}</p>
      <div className="tags-container">
        {courseDetails.tagsList.map(eachList => (
          <p className="list-element" key={eachList.id}>
            {eachList.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
