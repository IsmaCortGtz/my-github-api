function filterArray(rawData){
  return rawData.filter((currentRow, index) => {
    if (index === 0) return false;
    if (currentRow.length !== 5) return false;
    if (currentRow[0] === "") return false;
    if (currentRow[1] === "") return false;
    if (currentRow[3] === "") return false;
    if (currentRow[4] === "") return false;
    if ((new Date(currentRow[3]).getTime() + parseInt(process.env.HOMEWORK_MILISECONDS_TIME_OUDATE_FILTER)) < Date.now()) return false;
    if (new Date(currentRow[4]).getTime() > Date.now()) return false;
    return true;
  });
}


function orderHomework(homeworkList){
  var orderedHomework = [];
  homeworkList.forEach((element, index) => {
    if (orderedHomework.length === 0) {
      orderedHomework.push(element);
      return;
    }

    var _skip = false; 
    orderedHomework.forEach((listElement, listIndex) => {
      if (_skip) return;

      if (new Date(element.deadlineDate).getTime() <= new Date(listElement.deadlineDate).getTime() ){
        orderedHomework.splice(listIndex, 0, element);
        _skip = true;
        return;
      }

    });

    if (!_skip) orderedHomework.push(element);

  });

  return orderedHomework;

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
    currentJSON["openDate"] =  currentRow[4];
    formatedJSON.push(currentJSON);
  });

  return orderHomework(formatedJSON);
}