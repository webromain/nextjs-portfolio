import "./cv.css";
import { useEffect } from "react";
import pdfUrl from "./../../assets/pdf/romain-poisson-cv.pdf";

function Cv() {
  useEffect(() => {
    window.location.replace(pdfUrl);
  }, []);

  return null;
}

export default Cv;
