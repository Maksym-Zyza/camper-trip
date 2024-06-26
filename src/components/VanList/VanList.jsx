import React from 'react';
import style from './VanList.module.scss';
import VanCard from './VanCard';

const VanList = ({ data, listRef }) => {
  return (
    <ul className={style.list} ref={listRef}>
      {data.length > 0 ? (
        data.map(item => <VanCard item={item} key={item._id} />)
      ) : (
        <li className={style.noData}>
          Nothing found for search parameters. Please try again.
        </li>
      )}
    </ul>
  );
};

export default VanList;
