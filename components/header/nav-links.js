import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/">
          <>
            <>Home</>
          </>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/gallery">
          <>
            <>Gallery</>
          </>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/food">
          <>
            Food Pantry
          </>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/">
          <>
            <>Volunteer</>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/become-volunteer">
              <>Become a Volunteer</>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/about">
          <>
            <>About</>
          </>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <>Contact</>
        </Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
