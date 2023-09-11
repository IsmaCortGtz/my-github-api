function filterArray(rawData){
  return rawData.filter((currentRow, index) => {
    if (index === 0) return false;
    if (currentRow.length !== 5) return false;
    if (currentRow[0] === "") return false;
    if (currentRow[1] === "") return false;
    if (currentRow[3] === "") return false;
    if (currentRow[4] === "") return false;
    return true;
  });
}

export function createJSON(rawData) {
  var dataArray = filterArray(rawData);

  var formatedJSON = [];
  dataArray.forEach((currentRow, index) => {
    let currentJSON = {};
    currentJSON["subject"] = currentRow[0];
    currentJSON["title"] = currentRow[1];
    currentJSON["description"] = currentRow[2];
    currentJSON["deadline"] = stringToDate(currentRow[3], currentRow[4]);
    formatedJSON.push(currentJSON);
  });

  return formatedJSON;
}


function stringToDate(date, time){
  var oldDateArray = date.split("/");
  var newString = `${oldDateArray[2]}-${oldDateArray[1].padStart(2, "0")}-${oldDateArray[0].padStart(2, "0")}T${time}`;
  return new Date(newString);
}