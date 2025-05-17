// Asynchronus programming with async await!
async function getUser1() {
    console.log("Getting user data")

    const response = await fetch("https://randomuser.me/api")
    const data = await response.json()
    const user = data.results[0]
    console.log(`This person's name is: ${user.name.title} ${user.name.first} ${user.name.last}`);
    console.log(`This person's phone number is: ${user.phone}`)
}

getUser1()



// Asynchronus programming with async await!
async function getUser2() {
    console.log("Getting user data...")
    try {
        const response = await fetch("mhttps://randomuser.me/api")
        const data = await response.json()
        const user = data.results[0]
        console.log(`This person's name is: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`This person's phone number is: ${user.phone}`)
    } catch(err) {
        console.log(`You are having this error: ${err}`)
    }
}

getUser2()





// function kaj(kajerNam, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(kajerNam);
//             resolve("Should I write something here...");
//         }, time);
//     });
// }

// kaj("ঘুম থেকে উঠলাম।", 1000)
//     .then(() => kaj("হালকা এক্সারসাইস করলাম।"))
//     .then(() => kaj("হালকা নাস্তা পর্ব সেরে নিলাম।"))
//     .then(() => console.log("এখন, কোডিং ইন বিস্ট মোড!"))
//     .then((result) => {
//         print(result)
//         print("Finished, bye.")
//     });



// function returnInLog(msg) {
//     return () => {
//         return () => {
//             console.log(msg)
//         }
//     }
// }

// returnInLog("From a very high level!")()()







// Learning Promises 
// const examResult = new Promise((resolve, reject) => {
//     let passed = false; 

//     if (passed) {
//         resolve("অতো কিছু বুঝিনা; মিষ্টিমুখ করা।");
//     } else {
//         reject("পরিক্ষায় অংশ নেয়াটাই বড় ব্যাপার, ব্রো। লাইফে মাস্ট বি চিল করো। তবে দেশের ও দশের মঙ্গলের জন্যে চিন্তা ও কাজ করো। ডাক্তার, ইঞ্জিনিয়ার হতেই হব্বে, এমনটা কিন্তু না! অবশ্যই না!");
//     }
// });

// examResult.then((message) => console.log(message)).catch((error) => console.log(error))



// Learning callback hell -part 2
// function getIn(name, hadInvitation, welcome) {
//     console.log(`${name} entered the house...`);
//     if (hadInvitation) {
//         welcome(name);
//     } else {
//         console.log(`Uhm... Hey ${name}! We didn't invite you, but you're always welcome! 😎`);
//     }
// }

// getIn("Srestho", false, (name) => {
//     console.log(`Ahh, you came, ${name}! Had you eaten before coming here or you'll eat after going from here?`);
// });

// getIn("JARVIS", true, (name) => {
//     console.log(`Welcome, my boi ${name}! Our door was waiting for your feet dust!`);
// });




// Learning callback hell -part 1
// function getIn(name, hadInvitation, welcome) {
//     console.log(`${name} entered the house...`);
//     if (hadInvitation) {
//         welcome(name);
//     } else {
//         console.log(`Uhm... Hey ${name}! We didn't invite you, but you're always welcome! 😎`);
//     }
// }

// getIn("Srestho", false, (name) => {
//     console.log(`Ahh, you came, ${name}! Had you eaten before coming here or you'll eat after going from here?`);
// });

// getIn("JARVIS", true, (name) => {
//     console.log(`Welcome, my boi ${name}! Our door was waiting for your feet dust! 🚪✨`);
// });




// Random Functions...
function print(input) {
    console.log(input)
}