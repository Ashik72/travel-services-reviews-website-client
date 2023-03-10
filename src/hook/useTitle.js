import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Travel To Go`;
  }, [title]);
};
export default useTitle;
