import React from 'react'

import TimeWrapper from './TimeWrapper'

export default class DayWrapper extends React.Component {
  render () {
    const { heading, dayNum, numSlots } = this.props
    let isFirst = false
    let isLast = false

    if (dayNum === 0) {
      isFirst = true
    } else if (dayNum === 4) {
      isLast = true
    }

    const timeRows = Array(numSlots).fill(null).map((slot, i) => {
      return (
        <TimeWrapper key={i} isFirst={isFirst} isLast={isLast} dayHeading={heading} slotHour={(this.props.startSlot / 60) + i} minIncrement={this.props.minIncrement} />
      )
    })

    // <TimeWrapper key={i} time={time} isFirst={isFirst} isLast={isLast} />

    return (
      <div className='column'>
        <div className='day-heading'>{heading}</div>
        {timeRows}
      </div>
    )
  }
}
