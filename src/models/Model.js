/**
 * This file defines a class 'Modele' that allows you to create data models consistent with Recharts graphics.
 *
 * @class Modele
 */
export default class Modele {
  /**
   * Adds a day with zero session length to the data if it doesn't already exist.
   *
   * @param {Object} data - The data containing sessions information.
   * @returns {Object} Updated data with day zero if not present.
   */
  addDayZero(data) {
    if (data.sessions[0].day === 0) {
      return data;
    } else {
      const updateData = data.sessions.unshift({
        day: 0,
        sessionLength: 0,
      });
      return updateData;
    }
  }

  /**
   * Formats the date in sessions data by removing leading zeros.
   *
   * @param {Object} data - The data containing sessions information.
   * @returns {Object} Updated data with formatted dates.
   */
  formatdate(data) {
    const updatedSessions = data.sessions.map((session) => {
      const dateParts = session.day.split("-");
      const lastPart = dateParts[2].replace(/^0+/, ""); // Remove leading zeros
      return {
        ...session,
        day: lastPart,
      };
    });

    // Return updated data
    return {
      ...data,
      sessions: updatedSessions,
    };
  }

  /**
   * Calculates and updates the score data for Recharts.
   *
   * @param {Object} data - The data containing the score information.
   * @returns {Array} Array of objects representing the score for Recharts.
   */
  calculScore(data) {
    let score;
    if (data.score) {
      score = data.score;
    } else {
      score = data.todayScore;
    }

    const updateData = [
      {
        name: "Reste",
        score: 100 - score * 100,
        fill: "transparent",
      },
      {
        name: "Score",
        score: score * 100,
        fill: "red",
      },
    ];

    return updateData;
  }

  /**
   * Transforms performance data for Recharts radar chart.
   *
   * @param {Object} data - The data containing performance information.
   * @returns {Array} Array of objects representing transformed performance data.
   */
  transformPerformance(data) {
		const frenchTranslation = {
			"1": "cardio",
			"2": "énergie",
			"3": "endurance",
			"4": "force",
			"5": "vitesse",
			"6": "intensité"
		};

    const updatePerformance = data.data.map((item) => ({
      value: item.value,
      kind: frenchTranslation[item.kind.toString()],
    }));
    return updatePerformance;
  }
}
