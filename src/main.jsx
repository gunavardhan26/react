import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import InLine from './styles/InLine.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import './styles/globally.css';
// import External from './styles/External.jsx';
// import Ref from './useRef/Ref.jsx';
// import List from './List-keys/List.jsx';
import CompA from './useContext/CompA.jsx';
import UseEffect from './useEffect/UseEffect.jsx';
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import ClassIntro from './component/ClassIntro.jsx'
// import FuntionIntro from './component/FuntionIntro.jsx'
// import Props from './props/Props.jsx'
// import Parent from './props/Parent.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc /> */}
    {/* <Fbc /> */}
    {/* <ClassIntro /> */}
    {/* <FuntionIntro /> */}
    {/* <Props /> */}
    {/* <Parent /> */}
    {/* <State /> */}
    {/* <InLine /> */}
    {/* <Comp1 /> */}
    {/* <External /> */}
    {/* <Ref /> */}
    {/* <List/> */}.
    {/* <CompA/> */}
    <UseEffect/>
  </StrictMode>,
)
