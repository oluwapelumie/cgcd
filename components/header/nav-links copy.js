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
        <Link href="/index">
          <>
            <>Home</>
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
            <Link href="/index">
              <>Home One</>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              Home Two
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
                Header Styles
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
                <Link href="/index">
                  Header One
                </Link>
              </li>
              <li>
                <Link href="/index-2">
                  Header Two
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/causes">
          <>
            <>Causes</>
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
            <Link href="/causes">
              Causes
            </Link>
          </li>
          <li>
            <Link href="/cause-details">
              Cause Details
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/events">
          <>
            Events
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
            <Link href="/events">
              Events
            </Link>
          </li>
          <li>
            <Link href="/event-details">
              <>Event Details</>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/news">
          <>
            <>News</>
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
            <Link href="/news">
              <>News</>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <>News Details</>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <>Pages</>
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
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/volunteers">
              <>Volunteers</>
            </Link>
          </li>
          <li>
            <Link href="/become-volunteer">
              <>Become a Volunteer</>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <>Gallery</>
            </Link>
          </li>
        </ul>
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
