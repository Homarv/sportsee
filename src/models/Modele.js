// Ce fichier permet de créer des modèles de donné cohérent avec les graphiques Recharts

export default class Modele {

  addDayZero(data) {
    if(data.sessions[0].day===0){
      return data
    }
    else{
      const updateData = data.sessions.unshift({
        day:0,
        sessionLength: 0,
      });
      return updateData
    }
  }

  formatdate(data) {
    const updatedSessions = data.sessions.map(session => {
      const dateParts = session.day.split('-');
      const lastPart = dateParts[2].replace(/^0+/, ''); // Supprime les zéros initiaux
      return {
        ...session,
        day: lastPart
      };
    });
     // Assurez-vous de retourner les données mises à jour
     return {
      ...data,
      sessions: updatedSessions
    };
  }

  calculScore(data){
    let score
    if(data.score){
      score = data.score
    }else {
      score = data.todayScore
    }
    const updateData =
     [
      {
        name: 'Reste',
        score: 100 - score * 100,
        fill: 'transparent',
      },
      {
        name: 'Score',
        score: score * 100,
        fill: 'red',
      },
    ];
    return updateData
  }

  transformPerformance(data) {
    const updatePerfomance = data.data.map(item => 
      ({
      value: item.value,
      kind: data.kind[item.kind.toString()]
      })
    )
    return updatePerfomance
  }
}

