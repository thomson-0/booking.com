import { footerLinks } from "../../const";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="fLists">
        {footerLinks.map((items, index) => (
          <ul className="fList" key={index}>
            {items.map((item, itemIndex) => (
              <li className="fListItem" key={itemIndex}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="fText">Copyright © 2022 booking.com</div>
    </footer>
  );
}
export default Footer;
