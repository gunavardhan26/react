// import React, { createContext } from "react";
// import { CompB } from "./CompB";

// export const user = React.createContext();
// export const id = React.createContext();
// export const CompA = () => {
//   return (
//     <>
//       <user.Provider value={"Bharadwaj Kollepara"}>
//         <id.Provider value={297}>
//           <CompB />
//         </id.Provider>
//       </user.Provider>
//     </>
//   );
// };
import React from "react";
import CompB from "./CompB.jsx";
export let userName = React.createContext();
export let id = React.createContext();
const CompA = () => {
  return (
    <div>
      <userName.Provider value={"Bharadwaj Kollepara"}>
        <id.Provider value={297}>
          <CompB />
        </id.Provider>
      </userName.Provider>
    </div>
  );
};

export default CompA;
