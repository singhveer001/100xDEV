import axios from "axios";
import { atom, selector } from "recoil";

//  Asynchronous data queries (ignore commented part)
export const notifications = atom({
    key: "networkAtom",
    // default: {
    //     network: 4, 
    //     jobs: 6, 
    //     messaging: 3, 
    //     notifications: 3
    // }
    default : selector({
        key:"networkAtomSelector",
        get: async ( ) =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
                return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})