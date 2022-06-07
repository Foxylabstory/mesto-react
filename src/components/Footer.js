import React from "react";
export default function Footer() {
  
  function Time() {
    const [year, setYear] = React.useState(0);
  
    React.useEffect(() => {
      requestAnimationFrame(() => {
        const date = new Date();
        setYear(date.getFullYear());
      });
    });
  
    return (
      year
    );
  }

  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">© {Time()}. Foxylab</p>
      </footer>
    </>
  );
}