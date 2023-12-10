function gpa (totalGradeEarned, totalGradePoints) {
    return userGrade = `${totalGradeEarned / totalGradePoints}`
  }
  function calculateGpa(userGrade) {
  if (userGrade >= 4.5 && userGrade <= 5.0){
      return "First Class Honors"
    } else if (userGrade >= 3.5 && userGrade <= 4.5) {
      return "Second Class Upper"
    } else if (userGrade >= 2.40 && userGrade <= 3.49)  {
      return "Second Class Upper"
    } else if (userGrade >=1.50 && userGrade <= 2.39) {
      return "Third Class"
    }  else {
      return "Pass"
    }
  }
  
  const result = gpa (10, 21)
  console.log (result)
  let remark = calculateGpa (result)
  console.log (remark)