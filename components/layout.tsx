import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({children}) {
  return (
    <div className="mt-12">       
      <Header/>
      <main className="flex flex-col gap-12">        
        {children}
      </main>
      <Footer/>      
    </div>
  )
}