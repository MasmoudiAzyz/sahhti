import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Partie gauche avec le design */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-purple-500 to-orange-300 items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Bienvenue</h1>
      </div>

      {/* Partie droite avec le formulaire */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mb-2" />
          <h1 className="text-3xl font-bold text-gray-800">Sahhti</h1>
          <p className="text-gray-500">Bienvenue! Veuillez vous connecter.</p>
        </div>

        <form className="w-full max-w-sm">
          {/* Champ Nom */}
          <div className="mb-4">
            <label htmlFor="nom" className="block text-gray-600 mb-1">
              Nom :
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Ex: Nom"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              autoComplete="off"
            />
          </div>

          {/* Champ Prénom */}
          <div className="mb-4">
            <label htmlFor="prenom" className="block text-gray-600 mb-1">
              Prénom :
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Ex: Prénom"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              autoComplete="off"
            />
          </div>

          {/* Champ Téléphone */}
          <div className="mb-4">
            <label htmlFor="telephone" className="block text-gray-600 mb-1">
              Numéro de téléphone :
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Ex: +216 12345678"
              pattern="[0-9]{8,15}"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              autoComplete="off"
            />
          </div>

          {/* Checkbox "Rester Connecté" */}
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">
              Rester Connecté
            </label>
          </div>

          {/* Bouton S'inscrire */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
