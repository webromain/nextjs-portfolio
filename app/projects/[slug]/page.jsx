import projectsData from '../../../src/modules/pfProjectsList/projects.json'
import Navigation from '../../../src/modules/pfNavigation/navigation'
import Footer from '../../../src/modules/pfFooter/footer'
import ProjectDetail from '../../../src/modules/pfProjectsList/details/projectDetail'

const createSlug = (title) =>
  title.toLowerCase().trim()
    .replaceAll(/[^\w\s-]/g, '')
    .replaceAll(/\s+/g, '-')

export function generateStaticParams() {
  return projectsData.projects.map((p) => ({ slug: createSlug(p.name) }))
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  return (
    <>
      <Navigation />
      <ProjectDetail slug={slug} />
      <Footer />
    </>
  )
}
