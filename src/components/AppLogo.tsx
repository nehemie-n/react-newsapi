import logo from "../assets/logo.svg";

export function AppLogo({ size = 42 }: { size: number }) {
  return (
    <div style={{ height: size + "px" }} className="AppLogo">
      <img src={logo} alt="What's Up?" />
    </div>
  );
}
