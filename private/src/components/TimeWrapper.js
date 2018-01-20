import React from 'react'
import { connect } from 'react-redux'

import MemberDot from './MemberDot'

import { fetchUsers } from '../actions/firebaseActions'

class TimeWrapper extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUsers())
    }

    render() {
        const { users, dayHeading, slotHour, minIncrement } = this.props
        const slotStart = slotHour * 100
        const slotEnd = (slotHour + (minIncrement / 60)) * 100
        let rowStyle = 'time-row'

        if (this.props.isFirst === true) {
            rowStyle = 'time-row first'
        } else if (this.props.isLast === true) {
            rowStyle = 'time-row last'
        }

        let availUsers = []

        Object.keys(users).forEach(function (user) {
            const schedule = users[user].schedule
            let isUserAvail = true

            if (schedule !== undefined) {
                Object.keys(schedule).forEach(function (day) {
                    const name = schedule[day].name
                    const blocks = schedule[day].blocks

                    if (name === dayHeading && blocks !== undefined) {
                        Object.keys(blocks).forEach(function (block) {
                            const s = parseInt(blocks[block].startTime, 10)
                            const e = parseInt(blocks[block].endTime, 10)

                            if ((s <= slotStart && e >= slotEnd) ||
                                ((s > slotStart && s < slotEnd) && e >= slotEnd) ||
                                ((e > slotStart && e < slotEnd) && s <= slotStart) ||
                                (s > slotStart && e < slotEnd)) {
                                isUserAvail = false
                            }
                        })
                    }
                })
            }

            const username = users[user].username
            const userInitials = username.substring(0, 2)

            if (isUserAvail === true) {
                availUsers.push({ username: username, initials: userInitials, isAvail: true })
            } else {
                availUsers.push({ username: username, initials: '', isAvail: false })
            }
        })

        let index = 0
        let additionalCount = 0
        let additionalMembers = []

        const memberDots = availUsers.map((user, i) => {
            if (index < 4) {
                if (user.isAvail) index++
                return (
                    <MemberDot key={i} id={i} username={user.username} label={user.initials} isAvail={user.isAvail} />
                )
            } else {
                if (user.isAvail) {
                    additionalCount++
                    additionalMembers.push(user)
                }
                return null
            }
        })

        const additionalMemberTip = additionalMembers.map((user, i) => {
            return (
                <p key={i}>{user.username}</p>
            )
        })

        return (
            <div>
                <span className={rowStyle}>
                    <span>&nbsp;</span>
                    {memberDots}
                    <a className='tooltip' href='/#'>
                        <strong>{additionalCount !== 0 ? '+' + additionalCount : ''}</strong>
                        <span className='tip-text'>{additionalMemberTip}</span>
                    </a>
                </span>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        users: store.user.users
    }
}

export default connect(mapStateToProps)(TimeWrapper)