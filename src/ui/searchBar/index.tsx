'use client';

import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import SearchIcon from '../../../public/search-icon';

const SearchBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className={`${styles.search} ${menuOpen ? styles.searchOpen : ''}`}>
      <div onClick={() => setMenuOpen((prev) => !prev)}>
        <SearchIcon />
      </div>
      {menuOpen && <input className={styles.input} placeholder="Search..." />}
    </div>
  );
};

export default SearchBar;
