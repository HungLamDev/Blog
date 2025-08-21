import React from 'react'
import { SOCIAL_LINKS } from './constants'

export default function SocialLinks({ wrapperClassName = '', linkClassName = '' }) {
  return (
    <div className={`flex gap-4 ${wrapperClassName}`}>
      {SOCIAL_LINKS.map(({ href, label, Icon, hover }, idx) => (
        <a
          key={idx}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-gray-600 dark:text-gray-300 
            transition-colors duration-300 
            ${hover} 
            ${linkClassName}
          `}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
