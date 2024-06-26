export const getFilterParams = elements => {
  const { location, automatic, AC, TV, kitchen, shower, form } = elements;

  const details = {
    automatic: automatic.checked,
    AC: AC.checked,
    TV: TV.checked,
    kitchen: kitchen.checked,
    shower: shower.checked,
  };

  const filterParams = {};
  if (location.value) {
    filterParams.location = location.value;
  }

  if (form.value) {
    filterParams.form = form.value;
  }
  const detailsArr = Object.keys(details).filter(key => details[key] === true);
  if (detailsArr.length > 0) {
    filterParams.details = detailsArr;
  }

  return filterParams;
};
