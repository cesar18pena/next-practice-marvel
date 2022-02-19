import Header from './header';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
