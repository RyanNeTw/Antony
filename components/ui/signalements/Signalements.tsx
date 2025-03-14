import LeftMenu from "@/components/ui/dashboard_agent/LeftMenu"

const Signalements = ({ url }: { url: string }) => {
  return (
    <LeftMenu
      title="Signalements"
      links={[
        { title: "Récemment Consultés", link: "?filter=Récemment-Consultés" },
        {
          title: "Liste des signalements",
          link: `${url}?filter=Tous`,
          links: [
            { link: `${url}?filter=Tous`, text: "Tous" },
            { link: `${url}?filter=Non-Consultés`, text: "Non-Consultés" },
            { link: `${url}?filter=Consultés`, text: "Consultés" },
          ],
        },
        {
          title: "Supprimés",
          link: `${url}?filter=Supprimés`,
        },
      ]}
    />
  )
}

export default Signalements
