console.log("Harry is a hacker!")
console.log("But Garry is a hecker!")

setTimeout(() => {
    console.log("This message is delayed by 5 seconds.")
}, 5000);
setTimeout(() => {
    console.log("This message is delayed by 2 seconds.")
}, 2000);
setTimeout(() => {
    console.log("This message is delayed by 0 seconds.")
}, 0);

const fn = () => {
    console.log("Function fn is called.");
}

const callback = (arg) => {
  console.log("Callback called with arg: " + arg);
  console.log("I hope everything is alright now.");
  fn();
}

const loadScript = (src, callback) => {
    let sc= document.createElement("script");
    sc.src= src;
    sc.onload= callback("Arey Bhai! What is going wrong now?", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

console.log("End of script.")