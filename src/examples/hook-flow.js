// Hook flow
// https://github.com/donavon/hook-flow
// http://localhost:3000/isolated/examples/hook-flow.js

import React from 'react'

function Child() {
  console.log('%c Child: render start', 'color: MediumSpringGreen')

  const [count, setCount] = React.useState(() => {
   
    console.log('%c hello world 😉', 'color: darkgreen')
   
    return 0
  })

  React.useEffect(() => {
    console.log('%c Child: useEffect(() => {})', 'color: LightCoral')
    return () => {
      console.log(
        '%i Child: useEffect(() => {}) cleanup by Mandi 🧹',
        'color: blue',
      )
    }
  })

  React.useEffect(() => {
    console.log(
      '%c Child: useEffect(() => {}, [])',
      'color: MediumTurquoise',
    )
    return () => {
      console.log(
        '%c Child: useEffect(() => {}, []) cleanup 🧹',
        'color: MediumTurquoise',
      )
    }
  }, [])

  React.useEffect(() => {
    console.log('%c Child: useEffect(() => {}, [count])', 'color: HotPink')
    return () => {
      console.log(
        '%c Child: useEffect(() => {}, [count]) cleanup 🧹',
        'color: HotPink',
      )
    }
  }, [count])

  const element = (
    <button onClick={() => setCount(previousCount => previousCount + 1)}>
      {count}
    </button>
  )

  console.log('%c Child: render end', 'color: MediumSpringGreen')

  return element
}

function App() {
  console.log('%c App: render start', 'color: MediumSpringGreen')

  const [showChild, setShowChild] = React.useState(() => {
    console.log('%c App: useState(() => false)', 'color: tomato')
    return false
  })

  React.useEffect(() => {
    console.log('%c App: useEffect(() => {})', 'color: LightCoral')
    return () => {
      console.log('%c App: useEffect(() => {}) cleanup 🧹', 'color: LightCoral')
    }
  })

  React.useEffect(() => {
    console.log('%c App: useEffect(() => {}, [])', 'color: MediumTurquoise')
    return () => {
      console.log(
        '%c App: useEffect(() => {}, []) cleanup 🧹',
        'color: MediumTurquoise',
      )
    }
  }, [])

  React.useEffect(() => {
    console.log('%c App: useEffect(() => {}, [showChild])', 'color: HotPink')
    return () => {
      console.log(
        '%c App: useEffect(() => {}, [showChild]) cleanup 🧹',
        'color: HotPink',
      )
    }
  }, [showChild])

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={e => setShowChild(e.target.checked)}
        />{' '}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: 'solid',
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </>
  )

  console.log('%c App: render end', 'color: MediumSpringGreen')

  return element
}

export default App
