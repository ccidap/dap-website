import React, { Component } from 'react'
import { connect } from 'react-redux'

import DayWrapper from '../components/DayWrapper'

import { fetchAvailabilityForUser } from '../actions/firebaseActions'

class Availability extends Component {
    componentDidMount() {
        this.props.dispatch(fetchAvailabilityForUser(0))
    }

    render() {
        const minIncrement = 60 // 1 hour
        const minTotal = 660 // 8 hours
        const numSlots = minTotal / minIncrement
        const startSlot = 480 // 8 hours past midnight (08:00am)
        const dayHeadings = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

        const timeList = Array(numSlots).fill(null).map((slot, i) => {
            const rawVal = ((startSlot / 60) + i)
            const timeVal = (rawVal <= 12 ? rawVal : (rawVal - 12))

            return (
                <div key={i} className='time-heading'>{timeVal + ':00'}</div>
            )
        })

        const dayList = Object.keys(this.props.schedule).map((day, i) => {
            return (
                <DayWrapper key={i} dayNum={i} heading={dayHeadings[i]} numSlots={numSlots} startSlot={startSlot} minIncrement={minIncrement} />
            )
        })

        return (
            <div className='container'>
                <section className='section'>
                    <h1 className='title is-3'>Availability</h1>

                    <div className='columns'>
                        <div className='column is-narrow'>
                            <div className='time-heading'>&nbsp;</div>
                            {timeList}
                        </div>
                        <div className='column'>
                            <div className='columns'>
                                {dayList}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        schedule: store.availability.schedule
    }
}

export default connect(mapStateToProps)(Availability)