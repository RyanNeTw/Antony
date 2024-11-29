// pages/index.js

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Formulaire de signalement
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Dernière modification le 28/11/2024
        </p>

        <form id="feedbackForm" className="space-y-6">
          {/* Section Prénom et Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prenom" className="block text-gray-700 font-medium mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Amélia"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-gray-700 font-medium mb-1">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Dupont"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Section E-mail */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Adresse E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="amelia.dupont@yahoo.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Section Habitant */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="habitant"
              name="habitant"
              className="w-5 h-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="habitant" className="text-gray-700 font-medium">
              Habitant
            </label>
          </div>

          {/* Section Signalement */}
          <div>
            <label htmlFor="signalement" className="block text-gray-700 font-medium mb-1">
              Signalement
            </label>
            <textarea
              id="signalement"
              name="signalement"
              placeholder="Écrivez votre signalement ici..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Section Pièces Jointes */}
          <div className="file-upload">
            <label className="block text-gray-700 font-medium mb-2">
              Pièces Jointes
            </label>
            <label
              htmlFor="file"
              className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
            >
              Sélectionner
            </label>
            <input type="file" id="file" name="file" className="hidden" />
          </div>

          {/* Section Adresse */}
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">Emplacement</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="N°"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Rue"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Complément d'adresse 1"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Complément d'adresse 2"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              value="92160 Antony"
              disabled
              className="w-full px-4 py-2 border bg-gray-100 rounded-md"
            />
          </div>

          {/* Section Carte */}
          <div className="map-container border rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Antony&output=embed"
              className="w-full h-40"
            ></iframe>
          </div>

          {/* Bouton de soumission */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-medium hover:bg-green-500 focus:ring-4 focus:ring-green-300"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
