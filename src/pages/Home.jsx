import logo from "../assets/logo.png";
import bgImage from "../assets/bg2.png";
import bgaImage from "../assets/bg3.png";

export default function MedicalStaffPage() {
  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-blue-100">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Sahhti Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold">Sahhti</span>
        </div>
        <div className="space-x-6 text-gray-600 font-medium flex items-center">
          <button onClick={scrollToAbout} className="cursor-pointer">
            About
          </button>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Section 1 : Boutons avec background */}
      <div
        className="h-screen flex items-center justify-start ps-10 relative pt-20"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-7">Bienvenue sur Sahhti</h1>
          <p className="text-xl font-bold mb-5">
            Réservez votre consultation médicale en quelques clics.
          </p>
        </div>

        {/* Boutons */}
        <div className="absolute bottom-50 left-10 flex gap-6 z-10">
          <button className="bg-blue-500 text-white px-8 py-3 text-xl rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">
            Se connecter
          </button>
          <button className="bg-green-500 text-white px-8 py-3 text-xl rounded-lg font-semibold hover:bg-green-600 transition transform hover:scale-105">
            S'inscrire
          </button>
        </div>
      </div>

      {/* Section 2 : Contenu médical scrollable */}
      <div
        id="about-section"
        className="h-screen flex flex-col md:flex-row items-center justify-center p-10 bg-white"
      >
        {/* Illustration */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img
            src={bgImage}
            alt="Medical Staff Illustration"
            className="w-full max-w-4xl object-contain"
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold text-blue-900">MEDICAL STAFF</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Prenez vos rendez-vous médicaux en toute simplicité grâce à notre
            plateforme de réservation en ligne. Que ce soit pour une
            consultation générale, un spécialiste ou un examen médical, notre
            service vous permet de choisir l’hôpital et le médecin de votre
            choix en quelques clics. Gagnez du temps en évitant les longues
            attentes et bénéficiez d’un accès rapide aux meilleurs soins. Notre
            système sécurisé garantit une gestion efficace et fiable de vos
            réservations. Planifiez votre visite médicale dès maintenant !
          </p>
        </div>
      </div>
    </div>
  );
}
