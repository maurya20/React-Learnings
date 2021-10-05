import html2canvas from "html2canvas";
import React from "react";

// const data = () => {
//   html2canvas(document.querySelector("#capture")).then((canvas) => {
//     // //     document.body.appendChild(canvas);
//     const pdf = canvas;
//     // //     console.log(">>>>>>>>>>", canvas);
//     pdf.save("pagecapture.pdf");
//   });
// };

const print = () => {
  let w = document.getElementById("capture").offsetWidth;
  let h = document.getElementById("capture").offsetHeight;
  html2canvas(document.getElementById("capture"), {
    dpi: 300, // Set to 300 DPI
    scale: 3, // Adjusts your resolution
    onrendered: function (canvas) {
      var img = canvas.toDataURL("image/jpeg", 1);
      var doc = img;
      doc.addImage(img, "JPEG", 0, 0, w, h);
      doc.save("sample-file.pdf");
    },
  });
};

// test comments for checking the remote acceess.

export const ImgToPdf = () => {
  return (
    <div id="capture" style={{ padding: "10px", background: "#f5da55" }}>
      <h4>Hello world!</h4>
      <button className="btn btn-success" onClick={() => print()}>
        Get doc
      </button>
    </div>
  );
};
