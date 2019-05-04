import React from 'react'
import classnames from 'classnames'

const Sidebar = ({ Link, location }) => {
    const active = ['/', '/dashboard'].includes(location.pathname)
    const inactive = !active

    return (
        <span className="w-full mb-8 block text-white no-underline font-thin">
            <span className="flex items-center">
                <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classnames('w-5 h-5 mr-5', {
                        'fill-white': active,
                        'fill-indigo-lighter ': inactive
                    })}
                >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
                </svg>
                <Link
                    to={`/dashboard`}
                    className={classnames('text-md no-underline trans-30', {
                        'text-white font-bold': active,
                        'text-indigo-lighter font-thin': inactive
                    })}
                >
                    Dashboard
                </Link>
            </span>
        </span>
    )
}

export default Sidebar
