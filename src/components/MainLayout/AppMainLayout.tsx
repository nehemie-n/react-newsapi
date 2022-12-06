import img from "../../assets/hero-dark.jpg";
import { AppHeader } from "../AppHeader/AppHeader";
import "./AppMainLayout.scss";

interface Props {
  showSearch?: boolean;
  children?: any;
}
// classNames('foo', { bar: true }); // => 'foo bar'
export const AppMainLayout = ({ children, showSearch = true }: Props) => {
  return (
    <div className="AppLayout">
      {/* Back Imge */}
      <div
        className="AppLayout_Img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      {/* Content */}
      <div className="AppLayout_Cont">
        {/*  */}
        <AppHeader showSearch={showSearch}></AppHeader>
        {/*  */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export const AppScreen = ({ children }: { children?: any }) => {
  return <div className="AppScreen">{children}</div>;
};
