import React from "react";
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: "eitan230",
        name: "Eitan Sanabria Yberbuden",
        isFollowing: false,
    },
    {
        userName: "eitan03",
        name: "Eitan Alejandro Yberbuden",
        isFollowing: true,
    },
    {
        userName: "TMChein",
        name: "Tomas Chein",
        isFollowing: true,
    },
    {
        userName: "pheralb",
        name: "Pablo Hernandez",
        isFollowing: false,
    }
]

export function App() {
  // const formatUserName = (userName) => `@${userName}`;
  // const formattedUserName = <span>@{userName}</span>  
  
  // {...eitan03} *rest operator

  // const eitan03 = { isFollowing: true, userName: 'eitan03' };
   
  return (
    
    <section className="App">
        {users.map(user => {
            const {userName, name, isFollowing} = user
            return (
                <TwitterFollowCard 
                key={userName}
                userName={userName}
                name={name}
                initialIsFollowing={isFollowing}
                />
            )

        })}

    </section>
    
    // <React.Fragment>
    //     <TwitterFollowCard userName="midudev" name="Miguel Duran" initialIsFollowing={true  } />
    //     {/* <TwitterFollowCard {...eitan03}  /> */}
    //     <TwitterFollowCard  />

    // </React.Fragment>
  );
}
