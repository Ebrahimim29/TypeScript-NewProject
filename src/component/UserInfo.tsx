import type { FC, ReactNode } from "react";

type UserInfoType = {name:string, family:string, age:number, skills?:("C#" | "php" | "laravel")[], children:ReactNode}
// type UserInfoType = {name:string, family:string, age:number, skills?:("C#" | "php" | "laravel")[], children:JSX.Element}
// type UserInfoType = {name:string, family:string, age:number, skills?:("C#" | "php" | "laravel")[], children:()=>void}


const UserInfo : FC<UserInfoType> = ({age,family,name, children}) => {
// const UserInfo = (props : UserInfoType) => {

    // children()

    return(
        <div>
            {/* <h1>{props.name}</h1>
            <h2>{props.family}</h2>
            <h3>{props.age}</h3> */}
            <h1>{name}</h1>
            <h2>{family}</h2>
            <h3>{age}</h3>
            {children}
        </div>
    )
}

export default UserInfo;