import React from 'react'
import Header from '../Header'

function HeadOnlyLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='container'>

            <div className=''>
                {children}
            </div>

        </div>

    </div>
  )
}

export default HeadOnlyLayout