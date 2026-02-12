let hasComplatedCourse = false;
let givesCertificate = false;

//AND operator
// if (hasComplatedCourse === true && givesCertificate === true)
// {
//     generateCertificate();
// }
// else if (hasComplatedCourse === false && givesCertificate === false)
// {
//     showSolution();
// }


// function generateCertificate()
// {
//     console.log("Generating certificate....")
// }

// function showSolution()
// {
//     console.log("Showing the solution....")
// }

//OR Operator
if (hasComplatedCourse === false || givesCertificate === true)
{
    generateCertificate();
}

function generateCertificate()
{
    console.log("Generating certificate....")
}