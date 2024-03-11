import regionNames from "../Components/Map/regionNames.json"

const handleSingleStateRetrieval = (code, setModalInfo) => {
  // Make a call to the server API
  const name = regionNames[code];
  fetch(`/api/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        console.log("success: ", res.message);
        setModalInfo(prev => [...prev, res.data.law])
      } else {
        console.error("ERROR", res.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleCompareCall = (code1, code2, setModalInfo) => {
  const name1 = regionNames[code1];
  const name2 = regionNames[code2];

  fetch(`/api/compare/${name1}/${name2}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        console.log("success: ", res.message);
        console.log(res.data.laws);
        setModalInfo(prev => [...prev, res.data.laws]);
      } else {
        console.error("ERROR", res.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};



export { handleSingleStateRetrieval, handleCompareCall }