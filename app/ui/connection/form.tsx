import React, { useState } from "react"

const Form = () => {
  const [identifiant, setIdentifiant] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="p-10 items-center justify-center flex flex-col">
      <h1 className="text-[34px] font-light text-[#252B4F] mb-4">
        Connectez-vous
      </h1>
      <div className="p-10 w-full flex items-center justify-center">
        <div className="relative w-[284px] h-[306px] border">
          <form action="" className="mt-4" onSubmit={handleSubmit}>
            <div>
              <div>
                <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
                  Identifiant/Adresse E-mail
                </label>
                <input
                  className="w-[284px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                  type="text"
                  id="identifiant"
                  placeholder="amelia.dupont@yahoo.com"
                  value={identifiant}
                  onChange={(e) => setIdentifiant(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[#9D397C] text-xs font-medium pl-[14px]">
                  Mot de passe
                </label>
                <input
                  className="w-[284px] h-[35px] py-[10px] px-[14px] text-xs bg-[#F2F2F2]"
                  type="password"
                  id="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="absolute left-20 bottom-0 items-center justify-center w-[113px] h-[45px] text-white bg-[#252b4f]"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
