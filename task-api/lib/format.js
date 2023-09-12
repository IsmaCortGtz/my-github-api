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
  dataArray.forEach((currentRow) => {
    let currentJSON = {};
    currentJSON["subject"] = currentRow[0];
    currentJSON["title"] = currentRow[1];
    currentJSON["description"] = currentRow[2];
    currentJSON["deadlineDate"] = currentRow[3];
    currentJSON["deadlineTime"] =  currentRow[4];
    formatedJSON.push(currentJSON);
  });

  return formatedJSON;
}