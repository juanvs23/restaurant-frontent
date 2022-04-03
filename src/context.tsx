import { createContext,useState } from "react";
import { UseInterface } from "./models/context";



export const RestaurantUseContext=createContext<UseInterface |null>(null)

const RestaurantContext=({children}:any)=>{
    const [openLogin,setopenLogin]=useState<boolean>(false)



    const value:UseInterface={
      openLoginState:{
        openLogin,
        setopenLogin
      }
    }
    return(
        <RestaurantUseContext.Provider value={value}>
            {children}
        </RestaurantUseContext.Provider>
    )

}
export default RestaurantContext