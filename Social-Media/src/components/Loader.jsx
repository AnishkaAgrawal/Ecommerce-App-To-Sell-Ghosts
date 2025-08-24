import { useDispatch } from "react-redux";
import { FetchingActions } from "./store/MainStore";
import { useEffect } from "react";
import { ItemAction } from "./store/MainStore";
import { useSelector } from "react-redux";
const Loader = () => {
  const dispatch = useDispatch();
  const FetchingStatus = useSelector((store) => store.FetchingStatus);
  useEffect(() => {
    dispatch(FetchingActions.MarkFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((posts) => {
        dispatch(ItemAction.addInitialPost(posts.items[0]));
        dispatch(FetchingActions.MarkFetchingEnded());
      });
  }, []);
  return (
    <>
      {FetchingStatus.currentlyFetching && (
        <div
          className="spinner-border"
          style={{
            text:'white',
            height: "61px",
            width: "61px",
            margin: "4px auto",
            display: "flex",
          }}
          role="status"
        >
          <span className="visually-hidden ">Loading...</span>
        </div>
      )}
    </>
  );
};
export default Loader;
