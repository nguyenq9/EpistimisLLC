import regionNames from "../Components/Map/regionNames.json"

const handleAPIcall = (code, setModalInfo) => {
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
          setModalInfo(res.data.law)
        } else {
          console.error("ERROR", res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export { handleAPIcall }