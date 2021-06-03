export const setName = (name) => {
  console.log("action", name);
  return { type: "SET_NAME", payload: name }
};
//