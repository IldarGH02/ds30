import {MainRoutes} from "@/app/routes/routes.tsx";
import {CookieConsent} from "@/entites/CookieConsent";

export default function App() {
  return (
      <>
        <MainRoutes/>
        <CookieConsent/>
      </>
  )
}