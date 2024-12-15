export default function MenuGauche() {
  return (
    <div className="bg-[#E2E3E8] p-4 w-96 text-[#252A4F] h-fit">
    <h2 className="text-[#9D3A7C] mb-4 text-3xl">Signalements</h2>
    <ul className="space-y-2 list-disc p-4">
      <li>Récemment consultés</li>
      <li className="text-[#587CAF]">Liste des signalements</li>
      <ul className="mx-5 space-y-2">
        <li className="before:content-['>'] before:mr-2 text-[#587CAF]">Tous</li>
        <li className="before:content-['>'] before:mr-2">Non-consultés</li>
        <li className="before:content-['>'] before:mr-2 pb-4">Consultés</li>
      </ul>
      <li className="text-gray-800">Status</li>
      <li className="text-gray-800">Supprimés</li>

    </ul>
  </div>
  )
}