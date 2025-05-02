import { Button } from "@/component/Button";

export default function(){
    return <div>
        Hello 
        <Button></Button>
    </div>
}

// This is server Component 
// Here we uses client component also but exported Button from other file
// because Hello is server side and if no need to put sever side things in client side
// Then create a client component and  import it from that file and used that