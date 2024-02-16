import React from 'react'
import Sidebar from './sidebar'
export default function BaseLayout({ children }) {
  const activeMenu = 'home'
  const menuItems = [
    {
      title: 'Home',
      link: 'home',
      icon: 'home',
    },
    {
      title: 'Live Classes',
      link: 'live_classes',
      icon: 'class',
    },
    {
      title: 'Homework Help',
      link: 'homework_help',
      icon: 'homework',
    },
    {
      title: 'Video Library',
      link: 'video_library',
      icon: 'video',
    },
    {
      title: 'Mock Exam',
      link: 'mock_exam',
      icon: 'mock',
    },
    {
      title: 'Multiplayer Quiz',
      link: 'multiplayer_quiz',
      icon: 'quiz',
    },
    {
      title: 'Practice Exam',
      link: 'practice_exam',
      icon: 'practice',
    },
    {
      title: 'Notifications',
      link: 'notifications',
      icon: 'notification',
    },
    {
      title: 'Learning Report',
      link: 'learning_report',
      icon: 'learning',
    },
    {
      type: 'line',
    },
    {
      title: 'Buy Learning plan',
      link: 'buy_learning_plan',
      icon: 'buy',
    },
    {
      title: 'Manage Subscription',
      link: 'manage_subscription',
      icon: 'subscription',
    },
  ]

  return (
    <main>
      <section className="layout">
       <Sidebar/>
        <div className="right">
          <div className="header">
            <div className="searchContainer">
              <img className="p-2" src="/assets/svg/search.svg" alt="search" />
              <input
                className="search"
                type="text"
                placeholder="What would you like to learn?"
              />
            </div>
          </div>

          <div className="content">{children}</div>
        </div>
      </section>
    </main>
  )
}
