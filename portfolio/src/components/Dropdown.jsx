import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useRef, useState } from 'react';
import { MenuItems } from '../MenuItems';
import { IoReorderThree } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import styles from './Dropdown.module.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Before implementing the logic of closing the dropdown menu by clicking anywhere on the window
  // const handleClick = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    // Prevent the click event from propagating to the window
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleCloseDropdown = (e) => {
    // Check if the click occurred outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener to the window
    window.addEventListener('click', handleCloseDropdown);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('click', handleCloseDropdown);
    };
  }, []);

  return (
    <>
      <div onClick={handleClick} className={styles.container}>
        {!isOpen ? <IoReorderThree size={32} /> : <RxCross2 size={32} />}
        {isOpen && (
          <ul
            ref={dropdownRef}
            className={
              isOpen
                ? `${styles.dropdownMenu} ${styles.clicked}`
                : styles.dropdownMenu
            }
          >
            {MenuItems.map((items, index) => {
              return (
                <li key={index} className={styles.item}>
                  <Link
                    smooth
                    className={items.className}
                    to={items.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {items.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
