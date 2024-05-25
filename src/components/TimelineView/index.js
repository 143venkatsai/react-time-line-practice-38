import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getEachItem = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
    }
    return <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />
  }

  return (
    <div className="time-line-container">
      <h1 className="top-heading">
        MY JOURNEY OF <br /> <span className="sub-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => getEachItem(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
