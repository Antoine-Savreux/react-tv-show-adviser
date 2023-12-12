import s from "./style.module.css";
import { TvShowListItem } from "../TvShowListItem/TvShowListItem";
export function TvShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>Vous pourriez aimer : </div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TvShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
