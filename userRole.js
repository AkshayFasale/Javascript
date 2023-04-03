//
function userRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is a Admin person..!`;
        case "Subadmin":
            return `${name} is a SubAdmin with access to create and delete courses..!`;
        case "testPrep":
            return `${name} is a test prep access to create and delete test..!`;
        case "user":
            return `${name} is a user to consume content..!`;
        default:
            return `${name} is a Trial user..!`;
    }
}

console.log(userRole("Akshay", "admin"));
console.log(userRole("Akshay", "Subadmin"));
console.log(userRole("Akshay", ""));
//Akshay is a Admin person..!
