import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../reducers"
import { RouteEnum } from "./routes"

interface ProtectedRoute {
  children: JSX.Element
}

export const ProtectedRoutes = ({children}:ProtectedRoute) => {
  const isInit = useAppSelector(({temp}) => Object.keys(temp).length > 0)
  return isInit ? children : <Navigate to={RouteEnum.HOME} />
}