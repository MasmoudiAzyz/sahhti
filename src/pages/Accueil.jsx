import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Accueil = () => {
  const [selectedMenu, setSelectedMenu] = useState("accueil");
  const [appointmentView, setAppointmentView] = useState("list");
  const [selectedDate, setSelectedDate] = useState(null);

  const rendezVous = [
    {
      id: 1,
      docteur: "Dr. Smith",
      date: "2023-11-15",
      heure: "14:30",
      specialite: "Cardiologue",
    },
    {
      id: 2,
      docteur: "Dr. Johnson",
      date: "2023-11-16",
      heure: "10:00",
      specialite: "Dentiste",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-200 p-6 flex flex-col min-h-screen">
        <h1 className="text-2xl font-bold text-white mb-6">Sahhti</h1>
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedMenu("accueil");
            }}
            className={`flex items-center p-2 rounded-lg ${
              selectedMenu === "accueil" ? "bg-white shadow" : "hover:bg-white"
            }`}
          >
            🏠 Accueil
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedMenu("docteur");
            }}
            className={`flex items-center p-2 rounded-lg ${
              selectedMenu === "docteur" ? "bg-white shadow" : "hover:bg-white"
            }`}
          >
            👨‍⚕️ Docteur
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedMenu("rendez-vous");
            }}
            className={`flex items-center p-2 rounded-lg ${
              selectedMenu === "rendez-vous"
                ? "bg-white shadow"
                : "hover:bg-white"
            }`}
          >
            📅 Mes rendez-vous
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedMenu("docai");
            }}
            className={`flex items-center p-2 rounded-lg ${
              selectedMenu === "docai" ? "bg-white shadow" : "hover:bg-white"
            }`}
          >
            🤖 DocAI
          </a>
          <a
            href="#"
            className="flex items-center p-2 mt-auto text-red-600 hover:bg-white rounded-lg"
          >
            🚪 Logout
          </a>
        </nav>
      </aside>

      {/* Contenu principal */}

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
          <input
            type="text"
            placeholder="Rechercher un docteur..."
            className="w-2/3 p-2 border border-gray-300 rounded-lg"
          />

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Profile</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              👤
            </div>
          </div>
        </div>

        {selectedMenu === "rendez-vous" && (
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => setAppointmentView("form")}
              className={`px-4 py-2 rounded-lg ${
                appointmentView === "form"
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Prendre un rendez-vous
            </button>
            <button
              onClick={() => setAppointmentView("list")}
              className={`px-4 py-2 rounded-lg ${
                appointmentView === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Liste des rendez-vous
            </button>
          </div>
        )}

        {selectedMenu === "rendez-vous" ? (
          appointmentView === "form" ? (
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Nouveau rendez-vous</h2>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                placeholderText="Sélectionnez une date et heure"
              />
              {selectedDate && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-center font-medium">
                    📅 Rendez-vous programmé le :{" "}
                    <span className="text-blue-600">
                      {selectedDate.toLocaleString("fr-FR")}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Mes Rendez-vous</h2>
              <div className="space-y-4">
                {rendezVous.map((rdv) => (
                  <div
                    key={rdv.id}
                    className="p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{rdv.docteur}</h3>
                        <p className="text-gray-600">{rdv.specialite}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-blue-600">
                          {new Date(rdv.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-500">{rdv.heure}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                        Modifier
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                        Annuler
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <>
            <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md mx-auto">
              <div className="flex gap-2">
                {/* ... (contenu existant des filtres) ... */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* ... (contenu existant des illustrations) ... */}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Accueil;
