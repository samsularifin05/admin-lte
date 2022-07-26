import HeaderContent from "./HeaderContent";

interface props{
  headerContent? : boolean,
  title?: string,
  menu?: string,
  submenu?:string
}
const PanelContent: React.FC<props> = (props) => {
  return (
    <div className="content-wrapper">
      {props.headerContent && (
        <HeaderContent
          title={props.title}
          menu={props.menu}
          submenu={props.submenu}
        />
      )}
      <section className="content">
        <div className="container-fluid">{props.children}</div>
      </section>
    </div>
  );
};

export default PanelContent;
