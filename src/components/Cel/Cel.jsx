import React from 'react'

export default function Cel({alive}) {
  const klass = alive ? "alive" : "dead"
  return (<div className={`node ${klass}`} />)
}
