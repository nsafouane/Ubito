import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { WorkflowDiagram } from './components/WorkflowDiagram'
import { ComparisonStrip } from './components/ComparisonStrip'
import { AgentTemplates } from './components/AgentTemplates'
import { FeaturesGrid } from './components/FeaturesGrid'
import { TrustStrip } from './components/TrustStrip'
import { WaitlistCTA } from './components/WaitlistCTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ubito-dark">
      <Navigation />
      <Hero />
      <WorkflowDiagram />
      <ComparisonStrip />
      <AgentTemplates />
      <FeaturesGrid />
      <TrustStrip />
      <WaitlistCTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
