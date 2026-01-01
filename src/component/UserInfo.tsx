import type { FC } from "react";

type UserInfoType = {name:string, family:string, age:number, skills?:("C#" | "php" | "laravel")[]}


const UserInfo : FC<UserInfoType> = ({age,family,name}) => {
// const UserInfo = (props : UserInfoType) => {

    return(
        <div>
            {/* <h1>{props.name}</h1>
            <h2>{props.family}</h2>
            <h3>{props.age}</h3> */}
            <h1>{name}</h1>
            <h2>{family}</h2>
            <h3>{age}</h3>
        </div>
    )
}

export default UserInfo;