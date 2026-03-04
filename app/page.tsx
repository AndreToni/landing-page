import { Navbar }  from '@/components/layout/Navbar'
import { Footer }  from '@/components/layout/Footer'
import { Hero }    from '@/components/sections/Hero'
import { Ticker }  from '@/components/sections/Ticker'
import { Cases }   from '@/components/sections/Cases'
import { Areas }   from '@/components/sections/Areas'
import { Process } from '@/components/sections/Process'
import { About }   from '@/components/sections/About'
import { Banner }  from '@/components/sections/Banner'

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      {/* ESCURO */}
      <Hero />
      {/* Ticker — faixa neutra de transição */}
      <Ticker />
      {/* CLARO */}
      <Cases />
      {/* ESCURO */}
      <Areas />
      {/* CLARO */}
      <Process />
      {/* ESCURO */}
      <About />
      {/* CLARO */}
      <Banner />
      {/* ESCURO */}
      <Footer />
    </main>
  )
}
