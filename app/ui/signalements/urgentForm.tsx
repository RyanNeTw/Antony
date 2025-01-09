import React from "react"
import { useState, useEffect } from "react"

function UrgentForm() {
  const [name, setName] = useState<string>("Josette Martin")
  const [issueName, setIssueName] = useState<string>(
    "Troue au millieu de la route"
  )
  const [location, setLocation] = useState<string>(
    "5 Boulevard Benjamin le Grand, 92160 Antony"
  )
  const [status, setStatus] = useState<boolean>(true)

  useEffect(() => {
    setName("Josette Martin")
    setIssueName("Troue au millieu de la route")
    setLocation("5 Boulevard Benjamin le Grand, 92160 Antony")
    setStatus(true)
  }, [])


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col space-y-4">
        <h1 className="h-[41px] w-[623px] text-[34px] font-light text-[#252B4F]">
          Signalements Urgent de Josette Martin
        </h1>
        <p className="text-[#252B4F] text-xs font-extralight italic">
          Dernière modification le 28/11/2024
        </p>
        <div className="flex relative flex-col border h-[550px] w-[476px] space-y-2">
          <p className="flex items-center bg-[#9D3048] w-[84px] h-[36px] gap-[10px] px-[14px] py-[10px] font-bold text-xs text-white">
            Urgent
          </p>
          <div className="flex space-x-2">
            <p className="flex items-center bg-[#F2F2F2] w-[136px] h-[36px] px-[14px] py-[10px] text-xs font-normal text-[#9D397C]">
              {name}
            </p>
            <p className="flex bg-[#747474] gap-[10px] w-[231px] h-[36px] px-[14px] py-[10px] text-xs font-normal text-white">
              {issueName}
            </p>
          </div>
          <p className="flex bg-[#F2F2F2] gap-[10px] w-[476px] h-[36px] px-[14px] py-[10px] text-xs font-extralight text-[#252B4F]">
            {location}
          </p>
          <textarea name="" id="" className="bg-[#F2F2F2] h-[139px]"></textarea>
          <textarea name="" id="" className="bg-[#747474] h-[139px]"></textarea>
          <div className="absolute bottom-0 w-full flex justify-between">
            <button
              className={`px-[14px] py-[10px] gap-[10px] w-[87px] h-[36px] text-white text-xs font-normal ${status ? "bg-[#9D3030]" : "bg-[#7C9D30]"}`}
            >
              {status ? "Supprimer" : "Récupérer"}
            </button>
            {status && (
              <div className="flex space-x-2">
                <button className="bg-[#252B4F] px-[14px] py-[10px] gap-[10px] w-[75px] h-[36px] text-white text-xs font-normal">
                  Modifier
                </button>
                <button className="bg-[#7C9D30] px-[14px] py-[10px] gap-[10px] w-[74px] h-[36px] text-white text-xs font-normal">
                  Envoyer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrgentForm
