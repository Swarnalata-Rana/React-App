import React, { useState } from 'react';
import "./App.css";
const App =()=>{
  let time=new Date().toLocaleTimeString()
  const[ctime,setCtime]=useState(time);
  const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000);
  return(
    <div className="time">
      <h1>Real Time is {ctime}</h1>
    </div>
  );
};
export default App;

// import React, { useState } from 'react';
// import "./App.css";
// const App =()=>{
//   let time=new Date().toLocaleDateString()
//   const[ctime,setCtime]=useState(time);
//   const UpdateTime=()=>{
//     time=new Date().toLocaleDateString();
//     setCtime(time);
//   };
//   setInterval(UpdateTime,1000);
//   return(
//     <div className="time">
//       <h1>Real Date is That {ctime}</h1>
//     </div>
//   );
// };
// export default App;











