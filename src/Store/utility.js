export const updateObj = (oldObj, updatedValue) => {
  return {
    ...oldObj,
    ...updatedValue
  };
}
