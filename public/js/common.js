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

async function cancelAdoption(url, id) {
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
        resData = "Adoption cancelled";
        location.reload();
        return Promise.resolve(resData);
      }
      return Promise.reject(resData);
    })
    .catch((response) => {
      alert(response.statusText);
    });
}

async function updateSpecies(url, id) {
  newName = prompt("Please provide a new name for this species");
  if (newName && isNaN(newName)) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        id: id,
        newName: newName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          resData = "Changed name of a species";
          location.reload();
          return Promise.resolve(resData);
        }
        return Promise.reject(resData);
      })
      .catch((response) => {
        alert(response.statusText);
      });
  } else {
    alert("Please provide a proper name");
  }
}

async function deleteSpecies(url, id) {
  fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        resData = "Species deleted";
        location.reload();
        return Promise.resolve(resData);
      }
      return Promise.reject(resData);
    })
    .catch((response) => {
      alert(response.statusText);
    });
}

async function addNewSpecies(url) {
  let newName = prompt("What is the name of the new species?");
  if (newName && isNaN(newName)) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        name: newName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          const resData = "Added new species";
          location.reload();
          return Promise.resolve(resData);
        }
        return Promise.reject(resData);
      })
      .catch((response) => {
        alert(response.statusText);
      });
  } else {
    alert("Please provide a proper name");
  }
}

async function updateTemperament(url, id) {
  newTempName = prompt("Please provide a new name for this temperament");
  if (newTempName && isNaN(newTempName)) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        id: id,
        newTempName: newTempName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          resData = "Changed name of a temperament";
          location.reload();
          return Promise.resolve(resData);
        }
        return Promise.reject(resData);
      })
      .catch((response) => {
        alert(response.statusText);
      });
  } else {
    alert("Please provide a proper name");
  }
}

async function deleteTemperament(url, id) {
  fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        resData = "Temperament deleted";
        location.reload();
        return Promise.resolve(resData);
      }
      return Promise.reject(resData);
    })
    .catch((response) => {
      alert(response.statusText);
    });
}

async function addNewTemperament(url) {
  let newTemperament = prompt("What is the name of the new temperament?");
  if (newTemperament && isNaN(newTemperament)) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        name: newTemperament,
      }),
    })
      .then((response) => {
        if (response.ok) {
          const resData = "Added new temperament";
          location.reload();
          return Promise.resolve(resData);
        }
        return Promise.reject(resData);
      })
      .catch((response) => {
        alert(response.statusText);
      });
  } else {
    alert("Please provide a proper name");
  }
}
