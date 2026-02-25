let a = prompt("Enter a password");
if (a.length < 8) {
    console.log("The password must contain atleast 8 character")
}
let hasLowercase = false;
let hasUppercase = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] >= 'a' && a[i] <= 'z') {
        hasLowercase = true;
    }

    if (a[i] >= 'A' && a[i] <= 'Z') {
        hasUppercase = true;
    }
}

if (!hasLowercase) {
    console.log("The password must contain at least one lowercase letter");
}

if (!hasUppercase) {
    console.log("The password must contain at least one uppercase letter");
}

let counter1 = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0 && a[i] <= 9) {
        counter1 = counter1 + 1
    }
    else {
        counter1 = 0
    }
}
if (counter1 == 0) {
    console.log("The password must contain atleast one number")
}
