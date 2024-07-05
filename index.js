import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const navWelcome = document.querySelector("#nav-welcome");
  const navProjects = document.querySelector("#nav-projects");
  const navProfile = document.querySelector("#nav-profile");
  const navReseauxSociaux = document.querySelector("#nav-reseaux-sociaux");

  console.log(navWelcome, navProjects, navProfile, navReseauxSociaux);

  if (navWelcome) {
    new TypeIt("#nav-welcome", {
      strings: "Welcome",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }

  if (navProjects) {
    new TypeIt("#nav-projects", {
      strings: "Projects",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }

  if (navProfile) {
    new TypeIt("#nav-profile", {
      strings: "Profile",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }

  if (navReseauxSociaux) {
    new TypeIt("#nav-reseaux-sociaux", {
      strings: "Réseaux Sociaux",
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }
});
