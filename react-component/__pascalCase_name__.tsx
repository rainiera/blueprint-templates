import React, { useState } from 'react'

interface {{pascalCase name}}Props {
  children: React.ReactNode
}

interface {{pascalCase name}}State {}

const {{pascalCase name}} = ({children}: {{pascalCase name}}Props) => {
  const [state, setState] = useState<{{pascalCase name}}State>()
  return <div>This is a {{pascalCase name}} component!</div>
}

export default {{pascalCase name}}
