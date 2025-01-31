import React, { ReactNode } from "react"

const Subtitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="subtitle">{children}</h2>
}

export default Subtitle
