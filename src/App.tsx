import React, {Suspense} from 'react'
import { useSelector } from 'react-redux'
import {Footer, Header, Sidebar,Content, RootState} from './config'

const App: React.FC = () => {
  const sidebar: any = useSelector<RootState>(({theme}) => theme.handleSetPageSidebar)
  const header: any = useSelector<RootState>(({theme}) => theme.handleSetPageHeader)
  const footer: any = useSelector<RootState>(({theme}) => theme.handleSetPageFooter)
  const content: any = useSelector<RootState>(({theme}) => theme.handleSetPageContent)

  return (
    <Suspense fallback={<>MASUK</>}>
      {header && <Header /> }
      {sidebar && <Sidebar /> }
      {content && <Content />}
      {footer && <Footer />}
    </Suspense>
  )
}

export {App}
