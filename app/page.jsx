import Header from '../src/modules/pfHeader/header'
import ProjectsList from '../src/modules/pfProjectsList/projectsList'
import Contact from '../src/modules/pfContact/contact'
import Career from '../src/modules/pfCareer/career'
import About from '../src/modules/pfAbout/about'
import Footer from '../src/modules/pfFooter/footer'

export default function Home() {
  return (
    <>
      <Header />
      <ProjectsList />
      <Contact />
      <Career />
      <About />
      <Footer />
    </>
  )
}
