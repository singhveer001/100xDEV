import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className ="text-lg w-screen h-screen flex items-center justify-center">
         <div>
          Todo App
          <br /> 
          <Link href='/signin' className="text-md border m-2" >Sign To Todo app</Link>
          <br />
          <Link href='/signup' className="text-md border m-2">Sign Up To Todo app</Link>
         </div>
    </div>
  );
}
