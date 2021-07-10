import React, { useState } from 'react';
import Link from 'next/link';

const Index = () => {
  const [state, setState] = useState('');

  return (
    <>
      <input type='text' onChange={(e) => setState(e.target.value)} />
      <p>{state}</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  )
}

export default Index;