import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Barchart from '../components/Barchart';
import Nutrition from '../components/Nutrition';
import Radarchart from '../components/Radarchart';
import SimpleRadialBarchart from '../components/SimpleRadialBarchart';
import GetAverageSessions from '../services/GetAverageSessions';
import GetActivity from '../services/GetActivity';
import GetInformation from '../services/GetInformation';
import GetPerformance from '../services/GetPerformance';
import Welcome from '../components/Welcome';
import AverageSessionLinechart from '../components/AverageSessionLinechart';

/**
 * Composant principal pour la page d'accueil.
 * @component
 * @returns {JSX.Element} Élément JSX représentant la page d'accueil.
 */
const Home = () => {
  // Récupère l'ID de l'utilisateur à partir des paramètres d'URL
  const userId = Number(useParams().id);

  // États locaux pour stocker les données
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [informationData, setInformationData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    // Récupère les données des sessions moyennes, d'activité, d'information et de performance de l'utilisateur
    Promise.all([
      GetAverageSessions(userId),
      GetActivity(userId),
      GetInformation(userId),
      GetPerformance(userId)
    ])
      .then(([averageSessions, activity, information, performance]) => {
        setAverageSessionsData(averageSessions);
        setActivityData(activity);
        setInformationData(information);
        setPerformanceData(performance);
      })
  }, [userId]);
  
  // Rendu du composant
  return averageSessionsData && activityData ? (
    <div className='home'>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <div className='main-container'>
          <Welcome informationData={informationData} />
          <div className='principal-container'>
            <div className='chart-container'>
              <div className='barchart-container'>
                <Barchart activityData={activityData} />
              </div>
              <div className='child-chart-container'>
                <AverageSessionLinechart averageSessionsData={averageSessionsData} />
                <Radarchart performanceData={performanceData} />
                <SimpleRadialBarchart informationData={informationData} />
              </div>
            </div>
            <Nutrition informationData={informationData} />
          </div>
        </div>
      </div>
    </div>
  ) : "";
};

export default Home;
