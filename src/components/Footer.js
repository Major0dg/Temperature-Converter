import "../App.css";

const Footer = () => {
  console.log(new Date().getFullYear());

  return (
    <div className="footer">
      <br />

      <div>Copyright © {new Date().getFullYear()} Temp~Converter</div>
    </div>
  );
};

export default Footer;
