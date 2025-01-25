import LeftMenu from "../dashboard_agent/components/LeftMenu"

const Signalements = () => {
  return (
    <LeftMenu
      title="Signalements"
      links={[
        { title: "Récemment Consultés", link: "?filter=Récemment-Consultés" },
        {
          title: "Liste des signalements",
          link: "/dashboard_agent",
          links: [
            { link: "?filter=Tous", text: "Tous" },
            { link: "?filter=Non-Consultés", text: "Non-Consultés" },
            { link: "?filter=Consultés", text: "Consultés" },
          ],
        },
        {
          title: "Status",
          link: "?filter=Status",
        },
        {
          title: "Supprimés",
          link: "?filter=Supprimés",
        },
      ]}
    />
  )
}

export default Signalements
