/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "../src/Header"
import Main from "../src/Main"


export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
