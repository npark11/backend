function checkSocialInsuranceNumber(mynumber) {
  if(mynumber.includes('-') === false || mynumber.split('-').length - 1 != 2) {
    console.log("Error!! Not right formatting")
    return false
  } else if (mynumber.length != 11) {
    console.log("Error!! Enter the right number")
    return false
  } else {
    return true
  }
}

function printSocialInsuranceNumber(mynumber) {
  
  console.log(mynumber.slice(0,1)+"**"+mynumber.slice(3,5)+"**"+mynumber.slice(7,8)+"***")
}

function customSocialInsuranceNumber(mynumber) {
  const isValid = checkSocialInsuranceNumber(mynumber)
  if (isValid === false) return
  
  printSocialInsuranceNumber(mynumber)
}

customSocialInsuranceNumber("848-111-101");