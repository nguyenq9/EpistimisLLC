const handleSingleStateRetrieval = (name, setModalInfo) => {
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

const handleCompareCall = (name1, name2, setModalInfo) => {
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
        setModalInfo(res.data.laws)
      } else {
        console.error("ERROR", res.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};



export { handleSingleStateRetrieval, handleCompareCall }