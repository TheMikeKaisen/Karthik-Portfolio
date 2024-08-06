import React from 'react'

const SectionHeading = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <h2 className="text-4xl mb-7 text-center font-medium capitalize dark:text-gray-300">{children}</h2>
  )
}

export default SectionHeading
