import React, { Component } from 'react'

class Documentation extends Component {
    render() {
        return (
            <div className='container'>
                <section className='section'>
                    <h1 className='title is-3'>Documentation</h1>

                    <div className="columns">
                        <div className="column is-3">
                            <aside className="menu">
                                <p className="menu-label">General</p>
                                <ul className="menu-list">
                                    <li>
                                        <a className="is-active">Documents</a>
                                    </li>
                                </ul>
                                <p className="menu-label">Logistics</p>
                                <ul className="menu-list">
                                    <li>
                                        <a>Documents</a>
                                    </li>
                                </ul>
                                <p className="menu-label">Media</p>
                                <ul className="menu-list">
                                    <li>
                                        <a>Documents</a>
                                    </li>
                                </ul>
                                <p className="menu-label">Public Relations</p>
                                <ul className="menu-list">
                                    <li>
                                        <a>Documents</a>
                                    </li>
                                </ul>
                            </aside>
                        </div>

                        <div className="column">
                            <iframe title='docs' src="https://docs.google.com/a/uncc.edu/document/d/e/2PACX-1vTzfuMfCNn6Jc6acI9Pty0dvHM29pnzKP2Btn_PJKbx0MK5qDWRgbIwsPvVbGA19SGwKOQy2x7FawJZ/pub?embedded=true" style={{ width: '100%', minHeight: '700px' }}></iframe>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Documentation