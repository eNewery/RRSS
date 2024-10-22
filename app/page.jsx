export default function Home() {
  return (
    <div className="bodyContainer">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=homelogout" />
      <div className="navbarContainer">
        <div className="navbarItem">
        <span className="material-symbols-outlined">
home
</span>
<div className="navbarItemText">Home</div>

        </div>
        <div className="navbarItem">
        <span className="material-symbols-outlined">
logout
</span>
<div className="navbarItemText">Log Out</div>
        </div>
        </div>
      <div className="barContainer">
        <div className="barInputContainer">
          <input className="barInput" type="text" />
        </div>
        <button className="addBtn">ADD</button>
      </div>
    </div>
  );
}
