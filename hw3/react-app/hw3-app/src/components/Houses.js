import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(255, 0, 0, 0.5)",
  "rgba(64, 98, 164, 0.7)",
  "rgba(219, 153, 46, 0.8)",
  "rgba(156, 153, 46, 0.8)",
  "rgba(94, 153, 46, 0.8)",
  "rgba(94, 37, 0, 0.8)",
  "rgba(94, 219, 193, 0.8)",
  "rgba(94, 219, 193, 0.8)",
  "rgba(43, 8, 84, 0.8)",
  "rgba(43, 53, 84, 0.8)",
  "rgba(142, 53, 84, 0.8)",
  "rgba(142, 30, 84, 0.8)",
  "rgba(21, 59, 14, 0.8)",
  "rgba(21, 209, 227, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(255, 0, 0, 0.5)",
  "rgba(64, 98, 164, 0.7)",
  "rgba(219, 153, 46, 0.8)",
  "rgba(156, 153, 46, 0.8)",
  "rgba(94, 153, 46, 0.8)",
  "rgba(94, 37, 0, 0.8)",
  "rgba(94, 219, 193, 0.8)",
  "rgba(94, 219, 193, 0.8)",
  "rgba(43, 8, 84, 0.8)",
  "rgba(43, 53, 84, 0.8)",
  "rgba(142, 53, 84, 0.8)",
  "rgba(142, 30, 84, 0.8)",
  "rgba(21, 59, 14, 0.8)",
  "rgba(21, 209, 227, 0.8)",
];

const familyCounts = {
  "House Targaryen": 0,
  "House Baratheon": 0,
  "House Tarly": 0,
  "House Stark": 0,
  "House Lannister": 0,
  "House Greyjoy": 0,
  "House Clegaen": 0,
  "House Baelish": 0,
  "House Seaworth": 0,
  "House Tyrell": 0,
  "Free folk": 0,
  "Tarth": 0,
  "Naathi": 0,
  "Bolton": 0,
  "Naharis": 0,
  "Lorathi": 0,
  "Mormont": 0,
  "Sparrow": 0,
  "Viper": 0,
  "Unknown": 0,
  "Sand": 0,
  "Worm": 0,
  "Qyburn": 0,
  "Bronn": 0,
};

function getCount(characters) {
  characters.forEach((c) => {
    if (familyCounts[c.family]) {
      familyCounts[c.family]++;
    } else {
      const typos_Targ = ["Targaryan"];
      const typos_Barath = ["Baratheon"];
      const typos_Unknown = ["Unkown", "None", ""];
      const typos_Lannis = ["Lannister", "House Lanister"];
      const typos_Lorath = ["Lorath"];
      const typos_Stark = ["Stark"];
      const typos_freefolk = ["Free Folk"];
      const typos_clegaen = ["House Clegane"];
      if (typos_Targ.includes(c.family)) {
        familyCounts["House Targaryen"] += 1;
      } else if (typos_Barath.includes(c.family)) {
        familyCounts["House Baratheon"] += 1;
      } else if (typos_clegaen.includes(c.family)) {
        familyCounts["House Clegaen"] += 1;
      } else if (typos_Unknown.includes(c.family)) {
        familyCounts["Unknown"] += 1;
      } else if (typos_freefolk.includes(c.family)) {
        familyCounts["Free folk"] += 1;
      } else if (typos_Lannis.includes(c.family)) {
        familyCounts["House Lannister"] += 1;
      } else if (typos_Stark.includes(c.family)) {
        familyCounts["House Stark"] += 1;
      } else if (typos_Lorath.includes(c.family)) {
        familyCounts["Lorathi"] += 1;
      } else {
        familyCounts[c.family] = 1;
      }
    }
  });
  return familyCounts;
}

function CharacterHouses() {
  const [familyLabels, setFamilyLabels] = useState([]);
  const [familyCounts, setFamilyCounts] = useState([]);

  const url = "https://thronesapi.com/api/v2/Characters";
  useEffect((characters) => {
    const fetchCharacter = () => {
      axios
        .get(url)
        .then((response) => {
          let count = getCount(response.data);
          setFamilyLabels(Object.keys(count));
          setFamilyCounts(Object.values(count));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCharacter();
  }, []);

  const data = {
    labels: familyLabels,
    datasets: [
      {
        label: "Family Count",
        data: familyCounts,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="mt-5">
      <h4>Charts</h4>
      <div className="mt-5 mx-auto w-50 h-50">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default CharacterHouses;

// References
// https://react-chartjs-2.js.org/examples/doughnut-chart/
