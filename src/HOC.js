import { Popular } from "./App";
import { New } from "./App";

const highLight = (Component) => {
  return (props) => {

    if (props.views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } 
    
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else {
      return <Component {...props} />;
    }

  }
}

export default highLight;