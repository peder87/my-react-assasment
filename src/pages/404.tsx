import { useNavigate } from "react-router-dom"
import Button from "../components/button"
import { RouteEnum } from "../routes/routes"
import { WrapperCenter } from "../style/common"

export const NotFound = () => {
  const navigate = useNavigate()
  return <div>
    <WrapperCenter>
      <div>404 pagina non trovata</div>
      <div><Button click={() => navigate(RouteEnum.HOME)} text="torna alla home"/></div>
    </WrapperCenter>
  </div>
}