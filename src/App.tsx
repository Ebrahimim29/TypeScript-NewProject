import UserInfo from "./component/UserInfo";

function App() {
  return (
    <div>
      Hello....
      <UserInfo name="Mohammad" family="Kazemi" age={40} skills={["C#"]}>
        <div>
          {/* {() => console.log()} */}
          <span>
            Note: <br />
          </span>
          <span>
            به خاطر ReactNode هستش که می توانیم تگ هم در Children تعریف کنیم
          </span>
          <br />
          <span>
            JSX.Element: اجازه می دهد که تمام تگ ها و المانهایی که به عنوان
            Children کنار هم صدا زده می شوند باید داخل یک تگ والد قرار بگیرند
          </span>
        </div>
      </UserInfo>
    </div>
  );
}

export default App;
