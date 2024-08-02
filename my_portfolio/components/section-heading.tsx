import React from 'react'

const SectionHeading = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <h2 className="text-3xl mb-7 text-center font-medium capitalize">{children}</h2>
  )
}

export default SectionHeading
