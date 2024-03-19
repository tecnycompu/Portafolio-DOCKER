import Navbar from "./Navbar";
//import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import classNames from "classnames"; 




const Layout = ({ children, title, footer = true, dark=false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      console.log()
      nProgress.start();
    }
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', () => nProgress.done());
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)

    }
  }, [])

  return (
    <div className={classNames({'bg-dark': dark, 'bg-light': !dark})}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={classNames('text-center',{'text-light': dark})}>
            {title}
          </h1>

        )}
        {children}
      </main>
      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Javier Alfonso Morán Rodríguez - Portafolio</h1>
              <p>2000 - {new Date().getFullYear()} </p>
              <p>All rights Reserver.</p>
            </div>
          </footer>
        )
      }
    </div>

  )

}

export default Layout;