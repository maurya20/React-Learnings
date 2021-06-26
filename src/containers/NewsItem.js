import React from "react";

let NewsItem = ({ dog }) => {
  return (
    <>
      {dog && (
        <section>
          <div>
            <img src={dog} alt="Dog" width="500px" height="400px" />
          </div>
        </section>
      )}
    </>
  );
};
export default NewsItem;
