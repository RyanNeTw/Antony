"use client"

// import MainPage from "./(web-pages)/main/page"
import SignalementPage from "./(web-pages)/signalements/page"
import ConnectionPage from "./(web-pages)/connection/page"

const Page = () => {

  const isConnected = false; // TODO: check pour savoir si l'utilisateur est connecté
  if(isConnected){
    return <SignalementPage />
  }
    return <ConnectionPage />
}

export default Page
