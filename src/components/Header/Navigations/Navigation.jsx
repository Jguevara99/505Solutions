import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { useState } from "react";

const Navigation = () => {

  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allcatTab aling-items-center" onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">Categorías</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Camaras</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Camaras</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Celulares</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Inicio</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Productos</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Camaras</Button>
                  </Link>
                  <Link to="/">
                    <Button>Reloj</Button>
                  </Link>
                  <Link to="/">
                    <Button>Celulares</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Servicios</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contactanos</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
