export const greet = (name) => {
  if (name === "Thomas" || name === "Jessica" || name === "Stefan") {
    return "Hello Coach!";
    console.log(1);
  } else if (name) {
    return "Hello " + name + "!";
    console.log(2);
  } else {
    return "Hello Stranger!";
    console.log(3);
  }
};
