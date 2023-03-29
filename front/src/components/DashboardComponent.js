import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function DashboardComponent(props) {

    const {component:Component} = props

  return (
    <div>
        <Header/>
        <Component/>
        <Footer />
    </div>
  )
}
