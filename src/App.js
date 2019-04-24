import React from "react";
import Main from "./components/main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer,faWineBottle,faAngleRight,faBlender,faGlassWhiskey } from '@fortawesome/free-solid-svg-icons'

library.add(faBeer)
library.add(faWineBottle)
library.add(faAngleRight)
library.add(faBlender)
library.add(faGlassWhiskey)

class App extends React.Component{


  render() {
    return(
      <div>        
        <Main />
      </div>
    )
  }

}

export default App; 
