import React from 'react'
import OldCounter from './OldCounter'

export default function Home() {
    return (
        <>
            <h1 className='text-xl'>Welcome to Our Home</h1>
            <OldCounter name="old counter" />
        </>
    )
}