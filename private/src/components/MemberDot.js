import React from 'react'

export default class MemberDot extends React.Component {
  render () {
    const { id, isAvail, label, username } = this.props
    const dotLabel = (label !== '' ? <img src={'http://placekitten.com/200/200?image=' + id} alt='cat' /> : <span>&nbsp;</span>)
    let dotClass = ''

    if (isAvail === true) {
      dotClass = 'dot'
    }
    return (
        <span className={dotClass}>
            <a className='tooltip' href='/#'>
                <strong>{dotLabel}</strong>
                <span className='tip-text' style={{
                        textAlign: 'left',
                        textTransform: 'none',
                        padding: '10px',
                        borderRadius: '3px'
                }}>{username}</span>
            </a>
        </span>
    )
  }
}
