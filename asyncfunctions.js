//  question 1
async function MyTime(){
   
    console.log("I will buy a Range Rover");
}

    setTimeout( MyTime,2000);

//Question 3
const task= true
const performTask = new Promise((resolve, reject)=>{
    if (task){
        resolve('I will become successful');
    }else{
        reject('I am not successful')
    }
    
})
performTask.then(() =>{
    console.log('I will work harder');
})
.finally(() =>{
    console.log("I will still be successful");
});

//Question 4
function unstableTask(taskName, retries, FailureProbability){
    return new Promise((resolve, reject) => {
       const counting= Math.random(); 
    })
    if (counting >1){
        resolve("success");
    }
    else {
        reject ("error")
    }
  async function executeWithRetry(taskName,retries,FailureProbability)
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await unstableTask(taskName, failureProbability);
      console.log(`Trial ${attempt}: Task "${taskName}" succeeded`);
      return;
    } catch (error) {
      console.error(`Trial ${attempt}: ${error.message}`);
    }
  }
  console.log(`All ${retries} trials failed for task "${taskName}"`);
}
}
executeWithRetry('Data Processing', 1, 0.7);

//question 2
async function fetchAndLogUserDataInSequence(userIDs) {
    for (const id of userIDs) {
      try {
        const userData = await userData(id);
        console.log(`User data for ID ${id}:`, userData);
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
      }
    }
  }
  const userIds = [37,98,123,90];
  fetchAndLogUserDataInSequence(userIds);

  













