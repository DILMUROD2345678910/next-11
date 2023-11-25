import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <nav>
<Link href={'/'}>Home</Link>
<Link href={'/api-get'}>Api</Link>
<Link href={'/Video'}>Video</Link>
    </nav>
  )
}

export default Nav