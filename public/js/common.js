async function adoptAnimal(url, id) {
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        resData = "Adopted animal";
        location.reload();
        return Promise.resolve(resData);
      }
      return Promise.reject(resData);
    })
    .catch((response) => {
      alert(response.statusText);
    });
}

function cancelAdoption(url, id) {
    fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((response) => {
          if (response.ok) {
            resData = "Adopted animal";
            location.reload();
            return Promise.resolve(resData);
          }
          return Promise.reject(resData);
        })
        .catch((response) => {
          alert(response.statusText);
        });
    }

function updateSpecies(id) {
  newSpecies = prompt("Update species");
}

function deleteSpecies(id) {}

function updateTemperament(id) {
  newTemperament = prompt("Update temperament");
}

function deleteTemperament(id) {}
