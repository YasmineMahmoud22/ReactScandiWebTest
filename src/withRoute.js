import {
  useLocation,
    useParams
  } from "react-router-dom";
 export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let params = useParams();
      let path = useLocation();
      return (
        <Component
          {...props}
          params={{ params}}
          path = {{path}}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
  