import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import ExperienceDetails from "./workExperience/ExperienceDetails";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia?.("(prefers-color-scheme: dark)") || {
    matches: false
  };
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [locationHash, setLocationHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setLocationHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const experienceMatch = locationHash.match(/^#\/experience\/(\d+)$/);
  const experienceIndex = experienceMatch ? Number(experienceMatch[1]) : null;

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            {experienceIndex !== null ? (
              <ExperienceDetails experienceIndex={experienceIndex} />
            ) : (
              <>
                <Header />
                <Greeting />
                <Skills />
                <Education />
                <WorkExperience />
                <Projects />
                <StartupProject />
                <Achievement />
                <Blogs />
                <Profile />
                <Footer />
                <ScrollToTopButton />
              </>
            )}
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
